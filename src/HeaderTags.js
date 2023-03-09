import React from 'react'
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/esm/Image';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/esm/Button';

import './HeaderTags.css';

function HeaderTags() {
    return (
        <Card>
            <Card.Body className="headerTags">
                <Image src="/thumbnail.png" rounded />
                <Image src="/thumbnail.png" rounded />
                <Image src="/thumbnail.png" rounded />
                <Image src="/thumbnail.png" rounded />
                <Image src="/thumbnail.png" rounded />
                <Image src="/thumbnail.png" rounded />
                <Image src="/thumbnail.png" rounded />
                <Image src="/thumbnail.png" rounded />
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Autres
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