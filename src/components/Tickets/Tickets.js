import React, { Component } from 'react'
import Ticket from './Ticket'
export class Tickets extends Component {

    render() {
        const { tickets } = this.props

        return (
            <div className="tickets">
                { 
                    tickets.map( (ticket,ticket_id ) => (
                            <Ticket key={ticket_id} ticket={ticket}/>
                        )
                    )
                }
            </div>
        )
    }
}

export default Tickets
