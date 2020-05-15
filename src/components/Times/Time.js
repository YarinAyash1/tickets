import React, { Component } from 'react'
import Events from '../Events/Events'
export class Time extends Component {
    render() {
        const { events, time_name } = this.props.time
        return (
            <div className="events">
                <h4>{ time_name }</h4>
                <Events events={ events } />
            </div>
        )
    }
}

export default Time
