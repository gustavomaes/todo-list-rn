import React from 'react'

const ContextAPI = React.createContext({
    storedValue: null,
    update: false,
    days: {
    }
})

export default ContextAPI