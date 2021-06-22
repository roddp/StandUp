import React, { useState } from "react";
import "./Details.css";
import { Button } from "react-bootstrap";

const Details = (props) => {
  const [carro, setCarro] = useState(props.location.state);
  console.log(carro.image);

  const priceStyle = {
    color: "#EA4E3B",
    borderBottom: "1px solid grey",
  };

  const buttonStyle = {
    marginTop: "10px",
    marginRight: "5px",
  };

  const logo = require("../assets/images/" + carro.image + ".jpg").default;

  return (
    <div className="grid-container">
      <div className="imageCar">
        <img src={logo}></img>
      </div>
      <div className="options">
        <h1>{carro.brand + " " + carro.model}</h1>
        <p>{carro.year + " • " + carro.hp}hp</p>
        <h1 style={priceStyle}>{carro.price} €</h1>
        <Button style={buttonStyle}>Comprar</Button>
        <Button style={buttonStyle} variant="danger" href="/carros">
          Voltar
        </Button>
      </div>
      <div className="details">
        <h3>Detalhes</h3>
        <p>Marca: {carro.brand}</p>
        <p>Modelo: {carro.model}</p>
        <p>Ano: {carro.year}</p>
        <p>Combustivel: LoremIpsum</p>
        <p>Usado: Sim</p>
      </div>
    </div>
  );
};

export default Details;
