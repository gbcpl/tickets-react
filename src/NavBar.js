import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './NavBar.css';

function NavBar() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const logIn = () => setShow(true);

    return (
      <Navbar bg="light" expand="lg" sticky="top">
      <Container className="navbar" >
        <Navbar.Brand href="#home">DWWM</Navbar.Brand>
        <Form className="d-flex searchbar">
            <Form.Control 
                type="search"
                placeholder="Rechercher"
                className="me-2 "
                aria-label="Search"
            />
            <Button variant="outline-primary">Rechercher</Button>
        </Form>
        <Button variant="outline-primary" className="logIn" onClick={ logIn }>Se connecter</Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
      </Container>
    </Navbar>
    )
  }
  export default NavBar