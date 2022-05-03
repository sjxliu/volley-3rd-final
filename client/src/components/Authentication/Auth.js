// Dependencies & Tools
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LocalActivityOutlined";
import { GoogleLogin } from "react-google-login";

// Componenets
import useStyles from "./AuthStyles";
import Base from "./Base";
import Icon from "./Icon";
import { clientId } from "./IDs";

const Auth = () => {
  const dazzle_it = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);
  const handleSubmit = () => {};
  const handleChange = () => {};

  const switchForm = () => {
    setIsSignup((prevIsSignUp) => !prevIsSignUp);
    handleShowPassword(false);
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: "AUTH", data: { result, token } });
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = () => {
    console.log("Google Sign In unsuccessful. Try again");
  };

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
                <Base
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  mobile
                />
                <Base
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  mobile
                />
              </>
            )}
            <Base
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Base
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Base
                name="confirmPassword"
                label="Confirm Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={dazzle_it.submit}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
          <GoogleLogin
            clientId={clientId}
            render={(renderProps) => (
              <Button
                className={dazzle_it.googleBtn}
                startIcon={<Icon />}
                color="primary"
                variant="contained"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          />
          <Grid type="container" justify="flex-end">
            <Grid item>
              <Button onClick={switchForm}>
                {isSignup ? "Already a member? Sign In" : "New here? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
