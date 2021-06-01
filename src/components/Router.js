import React, { useContext } from "react";
import Home from "../pages/Home";
import Carros from "../pages/Carros";
import Login from "../pages/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Navbar";
import Details from "../pages/Details";

const NavRouter = () => {
  return (
    <Router>
      <Nav></Nav>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/carros">
          <Carros></Carros>
        </Route>
        <Route exact path="/carros/details">
          <Details></Details>
        </Route>
        <Route exact path="/login">
          <Login></Login>
        </Route>
      </Switch>
    </Router>
  );
};

export default NavRouter;
