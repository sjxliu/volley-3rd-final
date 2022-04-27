import React from "react";
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core'

import volley_img from './images/volley_logo.png'


const App = () => {
  return (
   <Container maxwidth='lg'>
<AppBar position="static" color="inherit">
<Typography variant="h2" align="center">
Volley
</Typography>
<img src={volley_img} alt='volley_logo' height='60' /> 
</AppBar>
   </Container>
  );
};

export default App;
