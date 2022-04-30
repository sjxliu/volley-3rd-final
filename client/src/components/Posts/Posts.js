import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Post from "./JUSTaPost/Post";
import useStyles from "./PostsStyles";

const Posts = ({currentId, setCurrentId}) => {
  const posts = useSelector((state) => state.posts);
  const dazzle_it = useStyles();

  console.log(posts);
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={dazzle_it.bigCon}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid item key={post._id} xs={12} sm={6}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
