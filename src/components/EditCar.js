import React, { useState } from "react";
import { Button, Modal, Form, Col } from "react-bootstrap";

const EditCar = ({ details }) => {
 

  const [brand, setBrand] = useState(details.brand);
  const [model, setModel] = useState(details.model);
  const [price, setPrice] = useState(details.price);
  const [cor, setCor] = useState(details.color);
  const [cv, setCV] = useState(details.hp);
  const [ano, setAno] = useState(details.year);
  const [imagem, setImagem] = useState(details.image);
  const [id, setId] = useState(details.id);

  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEdit = (e) => {
    e.preventDefault();

    fetch(" http://localhost:8000/cars/" + id, {
      method: "PUT",
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
    }).then(alert("Submited!"));
  }


  const buttonStyle = {
    marginTop: "10px",
    marginRight: "5px",
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow} style={buttonStyle}>
        Editar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          {" "}
          <Form 
          onSubmit={handleEdit}
          style={{ margin: "10px" }} >
            <Form.Row>
              <Form.Group as={Col} xs="auto" controlId="formGridMarca">
                <Form.Label>Marca</Form.Label>
                <Form.Control 
                type="text" placeholder="Marca" required 
                value = {brand}
                onChange={(e) => setBrand(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} xs="auto" controlId="formGridModelo">
                <Form.Label>Modelo</Form.Label>
                <Form.Control 
                type="text" placeholder="Modelo" required 
                value = {model}
                onChange={(e) => setModel(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} xs="auto" controlId="formGridPreço">
                <Form.Label>Preço</Form.Label>
                <Form.Control type="text" placeholder="Preço" required 
                value = {price}
                onChange={(e) => setPrice(e.target.value)}/>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} xs="auto" controlId="formGridCor">
                <Form.Label>Cor</Form.Label>
                <Form.Control type="text" placeholder="Cor" required 
                value = {cor}
                onChange={(e) => setCor(e.target.value)}/>
              </Form.Group>

              <Form.Group as={Col} xs="auto" controlId="formGridAno">
                <Form.Label>Ano</Form.Label>
                <Form.Control placeholder="Ano" required 
                value = {ano}
                onChange={(e) => setAno(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} xs="auto" controlId="formGridCV">
                <Form.Label>CV</Form.Label>
                <Form.Control type="text" placeholder="CV" required 
                value = {cv}
                onChange={(e) => setCV(e.target.value)}/>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} xs="auto" controlId="formGridImg">
                <Form.Label>Imagem</Form.Label>
                <Form.Control type="file"  
                onChange={(e) => setImagem(e.target.value)}/>
              </Form.Group>
            </Form.Row>
            <Button variant="primary" type = "submit" >
            Save Changes
          </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditCar;
