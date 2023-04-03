import Clock from 'react-live-clock'
import React from 'react'

const Datetime = () => {
    return (
        <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />
    )
}

export default Datetime