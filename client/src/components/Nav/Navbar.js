import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import volley_img from "../../images/volley-logo.png";
import useStyles from "./NavStyles";

const Navbar = () => {
  const dazzle_it = useStyles();
  const user = null;

  return (
    <AppBar position="static" color="inherit" className={dazzle_it.appBar}>
      <Link to="/" className={dazzle_it.container}>
        <img
          src={volley_img}
          alt="volley_logo"
          component={Link}
          to="/"
          className={dazzle_it.image}
          //   height="200"
          //   width="600"
        />
      </Link>
      <Toolbar className={dazzle_it.tools}>
        {user ? (
          <div className={dazzle_it.profile}>
            <Avatar
              className={dazzle_it.color}
              alt={user?.result.name}
              src={user?.result.imageUrl}
            >
              {user?.result.name.charAt(0)}
            </Avatar>
            <Typography className={dazzle_it.userName} variant="h6">
              {user?.result.name}
            </Typography>
            <Button
              className={dazzle_it.logout}
              variant="contained"
              color="secondary"
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign in
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
