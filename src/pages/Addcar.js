import React, { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";

const Addcar = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
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
          <Form.Control required placeholder="Marca" />
        </Form.Group>

        <Form.Group as={Col} xs="auto" controlId="formGridModelo">
          <Form.Label>Modelo</Form.Label>
          <Form.Control required placeholder="Modelo" />
        </Form.Group>

        <Form.Group as={Col} xs="auto" controlId="formGridPreço">
          <Form.Label>Preço</Form.Label>
          <Form.Control required placeholder="Preço" />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} xs="auto" controlId="formGridCor">
          <Form.Label>Cor</Form.Label>
          <Form.Control required placeholder="Cor" />
        </Form.Group>

        <Form.Group as={Col} xs="auto" controlId="formGridAno">
          <Form.Label>Ano</Form.Label>
          <Form.Control required placeholder="Ano" />
        </Form.Group>

        <Form.Group as={Col} xs="auto" controlId="formGridCV">
          <Form.Label>CV</Form.Label>
          <Form.Control required placeholder="CV" />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} xs="auto" controlId="formGridImg">
          <Form.Label>Imagem</Form.Label>
          <Form.Control required type="file" />
        </Form.Group>
      </Form.Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Addcar;
