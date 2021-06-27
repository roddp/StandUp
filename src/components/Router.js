import React, { useContext } from "react";
import Home from "../pages/Home";
import Carros from "../pages/Carros";
import Login from "../pages/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Navbar";
import Details from '../pages/Details';
import AddCar from '../pages/Addcar';
import About from '../pages/About';

//componente que compara o nome da path e muda para a pagina certa
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
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route path="/carros/details/" component ={(props) => <Details {...props}/>} >
        </Route>
        <Route exact path="/addCar">
          <AddCar></AddCar>
        </Route>
        <Route exact path="/about">
          <About></About>
        </Route>
      </Switch>
    </Router>
  );
};

export default NavRouter;
