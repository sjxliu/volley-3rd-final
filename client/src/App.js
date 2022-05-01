// Dependency imports
import React, {Switch} from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Route } from "react-router-dom";

// Variable imports

import Navbar from "./components/Nav/Navbar";
import Home from "./components/Homepage/Home";
import Auth from './components/Authentication/Auth'

const App = () => {
  return (
    <BrowserRouter>
      <Container maxwidth="lg">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/auth" exact component={Auth}/>
        </Switch>
        <Home />
      </Container>
    </BrowserRouter>
  );
};

export default App;
