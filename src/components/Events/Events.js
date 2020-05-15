import React, { Component } from 'react'
import Event from './Event'
export class Events extends Component {

      
    render() {
        const { events } = this.props
        return (
            <div className="events">
                { 
                    events && events.map( (event,event_id ) => (
                            <Event key={event_id} event={event}/>
                        )
                    )
                }
            </div>
        )
    }
}

export default Events
