import React,{useState,useEffect} from "react";
import Carro from "../components/Carro";

const Carros = () => {

  const [cars, setCars] = useState(null);
  console.log(cars);

  useEffect(() => {
    fetch("http://localhost:8000/cars")
    .then(res =>{
      return res.json();
    })
    .then(data => {
      setCars(data);
    })
  }, [])

  return (
    <>
      {cars ? cars.map((car) => (
        <Carro key = {car.id} carro={car}></Carro>
      )) : <div> Loading... </div>}
    </>
  );
};

export default Carros;
