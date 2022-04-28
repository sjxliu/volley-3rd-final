import React from "react";
import Post from "./JUSTaPost/Post";

import useStyles from "./styles";
const Posts = () => {
  const dazzle_it = useStyles();
  return (
    <>
      <h1>Posts</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
