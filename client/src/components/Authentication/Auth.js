import React from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  TextField,
} from "@material-ui/core";
import useStyles from "./AuthStyles";
import LockOutlinedIcon from "@material-ui/icons/LocalActivityOutlined";

const Auth = () => {
  const dazzle_it = useStyles();
  const isSignup = false;
  const handleSubmit = () => {};
  const handleChange = () => {};

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={dazzle_it.base} elevation={3}>
        <Avatar className={dazzle_it.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
        <form className={dazzle_it.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Grid xs={6} md={12}>
                  <TextField
                    name="firstName"
                    label="First Name"
                    handleChange={handleChange}
                    autoFocus
                    xs={6}
                  />
                </Grid>
                <Grid xs={6} md={12}>
                  <TextField
                    name="lastName"
                    label="Last Name"
                    handleChange={handleChange}
                    autoFocus
                    xs={6}
                  />{" "}
                </Grid>
              </>
            )}
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
