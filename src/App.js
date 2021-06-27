import "./App.css";
import React, { Component } from "react";
import ReactRouterSetup from "./components/Router";

export default class App extends Component {
  //retorna a navbar e a pagina selecionada
  render() {
    return <ReactRouterSetup />;
  }
}
