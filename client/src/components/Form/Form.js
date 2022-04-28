import React, { useState } from "react";
import { TextField, Button, Paper, Typography } from "@material-ui/core";

import useStyles from "./FormStyles";

const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    caption: "",
    tags: "",
    selectedFile: "",
  });
  const dazzle_it = useStyles();

  const handleSubmit = () => {};

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
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
      </form>
    </Paper>
  );
};

export default Form;
