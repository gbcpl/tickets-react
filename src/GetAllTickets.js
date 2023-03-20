import Ticket from './Ticket';
import { useState, useEffect } from 'react';

function GetAllTickets() { 
    const rows = [];
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch('http://localhost:8000/api/tickets/count')
        .then(response => response.json())
        .then(data => {
            setCount(data.count[0]['COUNT(*)']);
        })
        .catch(error => console.error(error));
    }, []);

    for (let i = 189; i <= count+189; i++) {
        rows.push(<Ticket key={i} number={i} />);
        console.log(rows);

    }
    return (
        <div>{rows.reverse()}</div>
    )
}

export default GetAllTickets