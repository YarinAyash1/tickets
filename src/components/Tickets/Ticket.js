import React, { Component } from 'react'
import Times from '../Times/Times'
export class Ticket extends Component {
    render() {
        const { ticket } = this.props
        return (
            <div className="ticket">
                
                <h3 className="name">{ ticket.name }</h3>
                <span className="price">₪ { ticket.price } </span>

                <Times times={ticket.times} />

                <a className="add-ticket">Add Ticket</a>
            </div>
        )
    }
}

export default Ticket
