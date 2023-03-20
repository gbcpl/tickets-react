import React from 'react'
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/esm/Button';
import axios from 'axios'
import { useEffect, useState } from 'react'

import './HeaderTags.css';

function HeaderTags() {
  
    const urlTags = "http://127.0.0.1:8000/api/tickets/tags" 
    const [tags, setTags] = useState(0)
  
    useEffect(() => {
      axios.get(urlTags).then((response) => {
        setTags(response.data);
      })
    }, [urlTags]);
  
    return (
        <Card>
            <Card.Body className="headerTags">
                <Button variant="secondary" className="tag">HTML</Button>{' '}
                <Button variant="secondary" className="tag">CSS</Button>{' '}
                <Button variant="secondary" className="tag">JavaScript</Button>{' '}
                <Button variant="secondary" className="tag">PHP</Button>{' '}
                <Button variant="secondary" className="tag">SQL</Button>{' '}
                <Button variant="secondary" className="tag">React</Button>{' '}
                <Button variant="secondary" className="tag">React Native</Button>{' '}
                <Button variant="secondary" className="tag">Flutter</Button>{' '}
                <Button variant="secondary" className="tag">Symphony</Button>{' '}
                <Button variant="secondary" className="tag">Bootstrap</Button>{' '}
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Tous les langages
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Card.Body>
        </Card> 
    )
}

export default HeaderTags