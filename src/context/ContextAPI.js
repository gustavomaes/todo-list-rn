import React from 'react'

const ContextAPI = React.createContext({
    storedValue: null,
    update: false,
    business: 0,
    personal: 0,
    complete: 0,
    days: {
    }
})

export default ContextAPI