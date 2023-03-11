import Ticket from './Ticket';
// import { useState, useEffect } from 'react';

function getAllTickets() { 
    const rows = [];

    for (let i = 1; i <= 10; i++) {
        /*const [ticketID, setTicketID] = useState("1");

        useEffect(()=>{
            setTicketID(i.toString());
        }, []);
        let ticketID = 1; */

        rows.push(<Ticket key={i} number={i} />);
        
    }
    return (
        <div>{rows}</div>
    )
}

export default getAllTickets