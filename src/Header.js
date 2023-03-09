import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import './Header.css';

function Header() {
    return (
        <Card >
            <Card.Body className="header">
                <Button variant="primary">Plus récentes</Button>{' '}
                <Button variant="primary">En cours</Button>{' '}
                <Button variant="primary">Fermées</Button>{' '}             
                <Button className="newTicket">
                    Poser une nouvelle question
                </Button>
            </Card.Body>

        </Card> 
    )
}

export default Header