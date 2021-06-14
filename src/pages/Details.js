import React, { useState } from "react";
import "./Details.css";
import logo from "../assets/logo.png";

const Details = (props) => {
  const [carro, setCarro] = useState(props.location.state);

  return (
    <div className="grid-container">
      <div className="imageCar">
        {" "}
        <img src={logo}></img>
      </div>
      <div className="options"></div>
      <div className="details">
        <p></p>
        <p>{carro.brand}</p>
        <p>{carro.model}</p>
        <p>{carro.hp}</p>
      </div>
    </div>
  );
};

export default Details;
