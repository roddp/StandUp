import React from "react";
import cars from "../assets/cars.json";
import Carro from "../components/Carro";
const Carros = () => {
  return (
    <>
      {cars.map((car) => (
        <Carro carro={car}></Carro>
      ))}
    </>
  );
};

export default Carros;
