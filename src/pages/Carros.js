import React,{useState,useEffect} from "react";
import Carro from "../components/Carro";

const Carros = () => {
  //state da informação dos carros
  const [cars, setCars] = useState(null);
  console.log(cars);

  //useEffect é o componentDidMount() em forma funcional. Recebe a data e mete no state
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
    //retorna um fragment com o component Carro. É usado um ternary para saber se existe informação no state. 
    //Caso sim retorna o component carro. Caso não retorna o div de loading.
    <>
      {cars ? cars.map((car) => (
        <Carro key = {car.id} carro={car}></Carro>
      )) : <div> Loading... </div>}
    </>
  );
};

export default Carros;
