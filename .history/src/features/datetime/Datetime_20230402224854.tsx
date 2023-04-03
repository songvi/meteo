import Clock from 'react-live-clock'
import React from 'react'

const Datetime = () => {
    return (
        <Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/Paris'} />
    )
}

export default Datetime