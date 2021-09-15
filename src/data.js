import { v4 as uuid } from "uuid";

export const defaultUser = {
  id: uuid(),
  username: "username",
  name: "name",
  profile_image:
    "https://res.cloudinary.com/hkodes/image/upload/v1599814643/MV5BZmMzZTkxMmQtNzQ3YS00ZmZiLTg3MWMtYTlmMGY5ODMzYzhmXkEyXkFqcGdeQXVyNTU1MDU0MjM_1.png",
};

export function getDefaultUser() {
  return {
    id: uuid(),
    username: "username",
    name: "name",
    profile_image:
      "https://scontent-ort2-2.cdninstagram.com/v/t51.2885-19/s150x150/82559664_3161307737426774_8687807477812559872_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com&_nc_ohc=llb3VCRb-mkAX_XTEi3&oh=64f0323db646c01299e513e3337b83ff&oe=5E8620BF",
  };
}

export const defaultPost = {
  id: uuid(),
  likes: 10,
  caption: `<span class=""> Get the FREE cheatsheet to learn them now: bit.ly/10-js-tips   Get the FREE cheatsheet to learn them now: bit.ly/10-js-tips   Get the FREE cheatsheet to learn them now: bit.ly/10-js-tips  Do you know the 10 JavaScript concepts you need to learn React? 🤔⚛️👇<br>•<br>•<br>👉 Get the FREE cheatsheet to learn them now: bit.ly/10-js-tips 🔥 Do you know the 10 JavaScript concepts you need to learn React? 🤔⚛️👇<br>•<br>•<br>👉 Get the FREE cheatsheet to learn them now: bit.ly/10-js-tips 🔥 Get the FREE cheatsheet to learn them now: bit.ly/10-js-tips Get the FREE cheatsheet to learn them now: bit.ly/10-js-tips</span>`,
  user: defaultUser,
  media: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
  comments: [
    {
      user: {
        username: "Mr Reese",
        content: "Get the FREE cheatsheet to learn them now",
      },
    },
    {
      user: {
        username: "Mr Reese",
        content: "Hiy posted something",
      },
    },
  ],
  created_at: "2020-02-28T03:08:14.522421+00:00",
};

export function getDefaultPost() {
  return {
    id: uuid(),
    likes: 10,
    caption: `<span class="">Do you know the 10 JavaScript concepts you need to learn React? 🤔⚛️👇<br>•<br>•<br>👉 Get the FREE cheatsheet to learn them now: bit.ly/10-js-tips 🔥</span>`,
    user: defaultUser,
    media:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    comments: [],
    created_at: "2020-02-28T03:08:14.522421+00:00",
  };
}

export const defaultNotifications = [
  {
    id: uuid(),
    type: "follow",
    user: defaultUser,
    created_at: "2020-02-29T03:08:14.522421+00:00",
  },
  {
    id: uuid(),
    type: "like",
    user: defaultUser,
    post: defaultPost,
    created_at: "2020-02-29T03:08:14.522421+00:00",
  },
];

export const defaultCurrentUser = {
  id: uuid(),
  username: "me",
  name: "myself",
  profile_image:
    "https://instagram.fhyd8-1.fna.fbcdn.net/v/t51.2885-19/s150x150/93772094_2540986786216388_8926699756453888000_n.jpg?_nc_ht=instagram.fhyd8-1.fna.fbcdn.net&_nc_ohc=5Hru8w2WXeIAX_svcBu&oh=746f6f908aa0bd9ea0c9b094b7a84261&oe=5F57BCF1",
  website: "https://finstagram-sigma.vercel.app/",
  email: "me@gmail.com",
  bio: "This is my bio",
  phone_number: "555-555-5555",
  posts: Array.from({ length: 10 }, () => getDefaultPost()),
  followers: [defaultUser],
  following: [defaultUser],
};
