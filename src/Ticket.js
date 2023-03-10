import axios from "axios";
import React from 'react'
import './Ticket.css';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/esm/Button';

function Ticket(props) {

  const number = props.number;
  /*const [nameTicket, setNameTicket] = useState(1);
  
	useEffect(()=>{
		setNameTicket(nameTicket + 6);
	}, []); 
  console.log(nameTicket)*/

  const baseURL = `http://127.0.0.1:8000/tickets/${number}`;
  const [post, setPost] = useState(null);
  
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, [baseURL]);
  
  if (!post) return null;

    return (
      <div className="ticket">
        <div className="mainTitle">
          <Button className="one">
            HTML
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
            <p>Posté par Trchk le {post[0].createdDate}</p>
        </div>
      </div>
    )
  }
  
  export default Ticket