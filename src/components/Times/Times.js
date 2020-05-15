import React, { Component } from 'react'
import Time from './Time'

export class Times extends Component {
    render() {
        const { times } = this.props
        return (
            <div className="times">
                { 
                    times.map( ( time,time_id ) => (
                            <Time key={ time_id } time={ time }/>
                        )
                    )
                }
            </div>
        )
    }
}

export default Times
