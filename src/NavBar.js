import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Modal';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css';



function NavBar() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const logIn = () => setShow(true);

  const [ticket, setNewTicket] = useState(false);
  const closeTicket = () => setNewTicket(false)
  const newTicket = () => setNewTicket(true);

    return (
      <Navbar collapseOnSelect bg="light" expand="lg" sticky="top">
      <Container className="navbar" >
        <Navbar.Brand href="#home" className="navbarhidden">DWWM</Navbar.Brand>
        <Form className="d-flex searchbar">
            <Form.Control 
                type="search"
                placeholder="Rechercher"
                className="me-2 "
                aria-label="Search"
            />
            <Button variant="outline-primary">Rechercher</Button>
        </Form>
        <Button className="newTicket navbarhidden" onClick={ newTicket } >
            Poser une nouvelle question
        </Button>
        <Modal show={ticket} onHide={closeTicket}>
          <Modal.Header closeButton>
            <Modal.Title>Créer un nouveau post</Modal.Title>
          </Modal.Header>
        <Modal.Body>Créer un nouveau post</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeTicket}>
            Fermer
          </Button>
        </Modal.Footer>
        </Modal>
        <Button variant="outline-primary" className="logIn navbarhidden" onClick={ logIn } >Se connecter</Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Connexion</Modal.Title>
          </Modal.Header>
        <Modal.Body>Se connecter avec Discord</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
          <NavDropdown title="Menu" className="menu" align={{ lg: 'start' }}>
          <NavDropdown.Item>Poser une question</NavDropdown.Item>
          <NavDropdown.Item>Se connecter</NavDropdown.Item>
          </NavDropdown>
      </Container>
    </Navbar>
    )
  }
  export default NavBar