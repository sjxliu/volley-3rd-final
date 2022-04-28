import React from "react";
import { useSelector } from "react-redux";

import Post from "./JUSTaPost/Post";
import useStyles from "./PostsStyles";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const dazzle_it = useStyles();

  console.log(posts)
  return (
    <>
      <h1>Posts</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
