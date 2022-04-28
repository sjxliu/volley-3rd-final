// Dependency imports
import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

// Variable imports
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import volley_img from "./images/volley-logo.png";
import useStyles from "./styles";

const App = () => {
  const dazzle_it = useStyles();

  return (
    <Container maxwidth="lg">
      <AppBar position="static" color="inherit" className={dazzle_it.appBar}>
        {/* <Typography variant="h2" align="center" className={dazzle_it.heading}>
          Volley
        </Typography> */}
        <img src={volley_img} alt="volley_logo" height="150" className={dazzle_it.image}/>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            spacing={3}
            justifyContent="space-between"
            alignItems="stretch"
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
