import axios from "axios";
import React from 'react'
import './Ticket.css';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/esm/Button';

function Ticket(props) {

  const number = props.number;

  const baseURL = `http://127.0.0.1:8000/tickets/${number}`;
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, [baseURL]);
  
  const urlCategories = "http://127.0.0.1:8000/tickets/categories" 
  const [categories, setCategories] = useState(0)

  useEffect(() => {
    axios.get(urlCategories).then((response) => {
      setCategories(response.data);
    })
  }, [urlCategories]);

  

  if (!post || post.length === 0) return null;

    const createdDate = new Date(post[0].createdDate)
    const category = post[0].category;
    const categoryId = category

    return (
      <div className="ticket">
        <div className="mainTitle">
          <Button className="one">
            {categories && categories.length > 0 ? categories[categoryId].name : 'No categories available'}
          </Button>
          <h3 className='title two'>{post[0].title}</h3>
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