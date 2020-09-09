import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/react-hooks";

import defaultUserImage from "./images/default-user-image.jpg";
import { CREATE_USER } from "./graphql/mutation";

const provider = new firebase.auth.GoogleAuthProvider();

// Find these options in your Firebase console
firebase.initializeApp({
  apiKey: "AIzaSyAEgMBz8Yrg1tEUpUPzNqNFtsNeOqu3_wg",
  authDomain: "finstagarm.firebaseapp.com",
  databaseURL: "https://finstagarm.firebaseio.com",
  projectId: "finstagarm",
  storageBucket: "finstagarm.appspot.com",
  messagingSenderId: "429999726088",
  appId: "1:429999726088:web:4edaf85f684d8b2116bbbd",
  measurementId: " G-M85WBR5046",
});

export const AuthContext = React.createContext();

export default function AuthProvider({ children }) {
  const [authState, setAuthState] = useState({ status: "loading" });
  const [createUsers] = useMutation(CREATE_USER, { onError: () => {} });

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken();
        const idTokenResult = await user.getIdTokenResult();
        const hasuraClaim =
          idTokenResult.claims["https://hasura.io/jwt/claims"];

        if (hasuraClaim) {
          setAuthState({ status: "in", user, token });
        } else {
          // Check if refresh is required.
          const metadataRef = firebase
            .database()
            .ref(`metadata/${user.uid}/refreshTime`);

          metadataRef.on("value", async (data) => {
            if (!data.exists) return;
            // Force refresh to pick up the latest custom claims changes.
            const token = await user.getIdToken(true);
            setAuthState({ status: "in", user, token });
          });
        }
      } else {
        setAuthState({ status: "out" });
      }
    });
  }, []);

  const signInWithGoogle = async () => {
    try {
      await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      console.log(error);
    }
  };

  async function signUpWithEmailAndPassword(formData) {
    const data = await firebase
      .auth()
      .createUserWithEmailAndPassword(formData.email, formData.password);
    console.log("Coming from firebase", data);
    if (data.additionalUserInfo.isNewUser) {
      const variables = {
        userId: data.user.uid,
        name: formData.name,
        username: formData.username,
        email: data.user.email,
        bio: "",
        website: "",
        phone: "",
        profileImage: defaultUserImage,
      };
      await createUsers({ variables });
    }
  }

  const signOut = async () => {
    try {
      setAuthState({ status: "loading" });
      await firebase.auth().signOut();
      setAuthState({ status: "out" });
    } catch (error) {
      console.log(error);
    }
  };

  let content;
  if (authState.status === "loading") {
    content = null;
  } else {
    content = (
      <AuthContext.Provider
        value={{
          signInWithGoogle,
          signOut,
          authState,
          signUpWithEmailAndPassword,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  }

  return <div className="auth">{content}</div>;
}
