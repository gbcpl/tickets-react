import axios from "axios";
import React from 'react'
import './Ticket.css';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Modal from 'react-bootstrap/esm/Modal';

function Ticket(props) {

  const number = props.number;

  const baseURL = `http://127.0.0.1:8000/api/tickets/${number}`;
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, [baseURL]);
  
  const urlCategories = "http://127.0.0.1:8000/api/tickets/categories" 
  const [categories, setCategories] = useState(0)

  useEffect(() => {
    axios.get(urlCategories).then((response) => {
      setCategories(response.data);
    })
  }, [urlCategories]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (!post || post.length === 0) return null;

    const createdDate = new Date(post[0].createdDate)
    const category = post[0].category;
    const categoryId = category

    return (
      <div className="ticket">
        <div className="mainTitle">
          <Button className="one">
            {categories && categories.length > 0 ? categories[categoryId].name.toUpperCase() : 'No categories available'}
          </Button>
          <Button className="one" onClick={handleShow}>
            <h3 className='title two'>{post[0].title}</h3>
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{post[0].title}</Modal.Title>
            </Modal.Header>
           <Modal.Body>{post[0].description}</Modal.Body>
           <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Fermer
              </Button>
        </Modal.Footer>
        </Modal>
        </div>
        <div className="tags">
          <p className="checked">&#10003;</p>
          <p className="checked">&#9932;</p>
          <p className="description">{post[0].description}</p>
        </div>
        <div className="created">
            <p>0 réponse</p>
            <p>Posté par Trchk le {createdDate.toLocaleDateString()}</p>
        </div>
      </div>
    )
  }
  
  export default Ticket