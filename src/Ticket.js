import React from 'react'
import './Ticket.css';
import Image from 'react-bootstrap/esm/Image';
import Button from 'react-bootstrap/esm/Button';

function Ticket() {
    return (
      <div className="ticket">
        <div className="mainTitle">
          <Button className="one">
            HTML
          </Button>
          <h3 className='title two'>Comment créer un tableau en HTML ?</h3>
        </div>
        <div className="tags">
          <p className="checked">&#10003;</p>
          <p className="checked">&#9932;</p>
          <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eros lacus, porta sit amet turpis at, fermentum sodales erat. Maecenas lacus, porta sit ex, ipsum. Maecen dictum ex, ipsum. Maecenas lacinia dictum ex, ipsum Maecenas lacinia dictum ex, ipsum, lorem...</p>
        </div>
        <div className="created">
            <p>0 réponse</p>
            <p>Crée par Trchk il y a 5 minutes</p>
        </div>
      </div>
    )
  }
  
  export default Ticket