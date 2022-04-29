import React, { useState } from "react";
import { TextField, Button, Paper, Typography } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";

import useStyles from "./FormStyles";
import {newPost} from '../../actionsTypes/posts.js'

const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    caption: "",
    tags: "",
    selectedFile: "",
  });
  const dazzle_it = useStyles();
  const dispatch = useDispatch();

  //handlers
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(newPost(postData))
  };

  const handleChange = (e) => {
    const key = e.target.name
    const value = e.target.value
setPostData({...postData, [key]: key === 'tags' ? value.split(','):value})
  }

  const clear = () => {};

  return (
    <Paper className={dazzle_it.base}>
      <form
        autoComplete="off"
        noValidate
        className={dazzle_it.form}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Spike It!</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={handleChange}
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={handleChange}
        />
        <TextField
          name="caption"
          variant="outlined"
          label="Caption"
          fullWidth
          value={postData.caption}
          onChange={handleChange}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={handleChange}
        />
        <div className={dazzle_it.upload}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={dazzle_it.subBtn}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
