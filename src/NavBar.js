import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css';
import axios from "axios"; 

function NavBar() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const logIn = () => setShow(true);

  const [ticket, setNewTicket] = useState(false);
  const closeTicket = () => setNewTicket(false)
  const newTicket = () => setNewTicket(true);
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { title, description, category };
    axios.post('http://localhost:8000/tickets/register', data)
      .then((response) => {
        setSubmittedData(response.data);
        setTitle('');
        setDescription('');
        setCategory('');
      })
      .catch((error) => {
        console.error(error);
      });
  };


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
        <Modal.Body>
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group md="4" controlId="validationCustom01">
                <Form.Label>Titre de votre ticket</Form.Label>
                <Form.Control
                  required
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <Form.Control.Feedback>Titre correct</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control 
                  required
                  as="textarea" 
                  rows={10}
                  value={description} 
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>
              <Form.Select aria-label="Default select example">
                <option>Catégorie</option>
                <option value="1">HTML</option>
                <option value="2">CSS</option>
                <option value="3">JavaScript</option>
                <option value="4">PHP</option>
                <option value="5">SQL</option>
                <option value="6">React</option>
                <option value="7">React Native</option>
                <option value="8">Flutter</option>
                <option value="9">Symphony</option>
                <option value="10">Bootstrap</option>
                <Form.Control
                  required
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </Form.Select>
              <Button type="submit" onClick={closeTicket}>Envoyer</Button>
            </Form>
        </Modal.Body>
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