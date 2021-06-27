import React, { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";

const Addcar = () => {
  //states dos valores do form
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [cor, setCor] = useState("");
  const [cv, setCV] = useState("");
  const [ano, setAno] = useState("");
  const [imagem, setImagem] = useState("");

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() == false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    //Post na BD
    fetch(" http://localhost:8000/cars", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        brand: brand,
        model: model,
        price: price,
        color: cor,
        hp: cv,
        year: ano,
        image: imagem,
      }),
    });
  };

  //retira o nome do ficheiro
  const handleImage = (e) => {
    const imagename = e.target.files[0].name;
    setImagem(imagename);
  };

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      style={{ margin: "10px" }}
    >
      <Form.Row>
        <Form.Group as={Col} xs="auto" controlId="formGridMarca">
          <Form.Label>Marca</Form.Label>
          <Form.Control
            type="text"
            placeholder="Marca"
            onChange={(e) => setBrand(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group as={Col} xs="auto" controlId="formGridModelo">
          <Form.Label>Modelo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Modelo"
            onChange={(e) => setModel(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group as={Col} xs="auto" controlId="formGridPreço">
          <Form.Label>Preço</Form.Label>
          <Form.Control
            type="text"
            placeholder="Preço"
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} xs="auto" controlId="formGridCor">
          <Form.Label>Cor</Form.Label>
          <Form.Control
            type="text"
            placeholder="Cor"
            onChange={(e) => setCor(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group as={Col} xs="auto" controlId="formGridAno">
          <Form.Label>Ano</Form.Label>
          <Form.Control
            placeholder="Ano"
            onChange={(e) => setAno(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group as={Col} xs="auto" controlId="formGridCV">
          <Form.Label>CV</Form.Label>
          <Form.Control
            type="text"
            placeholder="CV"
            onChange={(e) => setCV(e.target.value)}
            required
          />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} xs="auto" controlId="formGridImg">
          <Form.Label>Imagem</Form.Label>
          <Form.Control type="file" onChange={(e) => handleImage(e)} />
        </Form.Group>
      </Form.Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Addcar;
