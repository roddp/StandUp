import React from "react";
import {
  Navbar,
  Nav,
  NavLink,
  Button,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import logo from "../assets/logo.png";

const Navgbar = () => {
  const buttonStyle = {
    marginRight: "10px",
  };

  //href indica qual é o nome da path a ser mudado quando carregado
  return (
    <Navbar bg="dark" variant="dark" className="py-3">
      <Navbar.Brand href="/">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        StandUp
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/carros">Carros</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="/about">About</NavDropdown.Item>
            <NavDropdown.Item href="/action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="/action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <Button variant="outline-success" href="/login" style={buttonStyle}>
            Login
          </Button>
          <Button variant="outline-primary" href="/addCar">
            + Adicionar Carro
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navgbar;
