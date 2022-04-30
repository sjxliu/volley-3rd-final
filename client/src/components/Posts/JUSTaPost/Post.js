import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";

import useStyles from "./PostStyles";



const Post = ({ post, setCurrentId }) => {
  const dazzle_it = useStyles();
  return (
    <Card className={dazzle_it.card}>
      <CardMedia
        className={dazzle_it.content}
        image={post.selectedFile}
        title={post.title}
      />
      <div className={dazzle_it.topOver}>
        <Typography variant="h6">{post.creator} </Typography>
        <Typography variant="body2">
          {moment(post.creator).fromNow()}{" "}
        </Typography>
      </div>
      <div className={dazzle_it.bottomOver}>
        <Button style={{ color: "white" }} size="small" onClick={() => setCurrentId(post._id)}>
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <div className={dazzle_it.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}{" "}
        </Typography>
      </div>
      <Typography className={dazzle_it.title} variant="h5" gutterBottom>
          {post.title}
        </Typography>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={dazzle_it.actions}>
        <Button size="small" color="primary" onClick={() => {}}>
          <ThumbUpAltIcon fontSize="small" />
          Nice Kill
          {post.like}
        </Button>
        <Button size="small" color="primary" onClick={() => {}}>
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
