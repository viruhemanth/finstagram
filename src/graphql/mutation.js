import { gql } from "apollo-boost";

export const CREATE_USER = gql`
  mutation createUsers(
    $userId: String!
    $email: String!
    $name: String!
    $phone: String
    $profileImage: String
    $username: String!
    $website: String
    $bio: String
  ) {
    insert_users(
      object: {
        bio: $bio
        email: $email
        name: $name
        phone: $phone
        profile_image: $profileImage
        username: $username
        website: $website
        userId: $userId
      }
    ) {
      affected_rows
    }
  }
`;

// $userId: String!, $email: String!, $name: String!, $phone: String!, $profileImage: String!, $username: String!, $website: String, $bio: String

/*
 *{
  "name": "fdfd",
  "username": "rerfsdf",
  "email": "fdfdf",
  "userId": "dfsgsfg",
  "bio": "fdafd",
  "website": "fdsfsgfs",
  "profileImage": "gagfgsgdg",
  "phone": "7878787878"
}
 * */
