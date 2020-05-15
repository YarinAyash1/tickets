import React, { Component } from 'react'

export class Event extends Component {
    render() {
        const { event_name } = this.props.event
        console.log(event_name)
        return (
            <div className="event">
                <div>{ event_name }</div>
            </div>
        )
    }
}

export default Event
