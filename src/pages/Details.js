import React, { useState } from "react";
import "./Details.css";
import { Button } from "react-bootstrap";
import logo from '../assets/logo.png'

 //recebe a data do carro carregado
const Details = (props) => {
  const [carro, setCarro] = useState(props.location.state);


  const handleDelete = (id) => {
    fetch('http://localhost:8000/cars/' + id, {
    method: 'DELETE',
  })
  .then(res => res.json()) // or res.json()
  .then(res => console.log(res))

  }
  const priceStyle = {
    color: "#EA4E3B",
    borderBottom: "1px solid grey",
  };

  const buttonStyle = {
    marginTop: "10px",
    marginRight: "5px",
  };

  //tenta ir buscar a imagem. Se não existir o logo é metido
  let carImage = null;
  try {
    carImage = require("../assets/images/"+carro.image+".jpg").default;
  }catch(e){
    if (e.code !== 'MODULE_NOT_FOUND') {
        throw e;
    }
    carImage = logo;
  }
  
  return (
    <div className="grid-container">
      <div className="imageCar">
        <img src={carImage}></img>
      </div>
      <div className="options">
        <h1>{carro.brand + " " + carro.model}</h1>
        <p>{carro.year + " • " + carro.color +" • " + carro.hp}hp</p>
        <h1 style={priceStyle}>{carro.price} €</h1>
        <Button style={buttonStyle}>Comprar</Button>
        <Button style={buttonStyle} onClick={handleDelete(carro.id)}>Apagar</Button>
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
