import React from 'react'
import './Ticket.css';
import Image from 'react-bootstrap/esm/Image';

function Ticket() {
    return (
      <div className="ticket">
        <h2 className='title'>Salut</h2>
        <div className="tags">
            <Image src="/thumbnail.png" rounded />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eros lacus, porta sit amet turpis at, fermentum sodales erat. Maecenas lacus, porta sit ex, ipsum. Maecen dictum ex, ipsum. Maecenas lacinia dictum ex, ipsum Maecenas lacinia dictum ex, ipsum, lorem...</p>
        </div>
        <div className="created">
            <p>0 réponse</p>
            <p>Crée par Trchk il y a 5 minutes</p>
        </div>
      </div>
    )
  }
  
  export default Ticket