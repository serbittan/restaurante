import React from 'react'
import { Text } from 'react-native'

const TextProcess = () => {
    return (
        <>
            <Text style={{ textAlign: 'center', fontSize: 20, marginVertical: 10, fontWeight: 'bold' }}>Your order is being processed!</Text>
            <Text style={{ textAlign: 'center', fontSize: 20, marginVertical: 10 }}>We are calculating time of delivery...</Text>
        </>
    )
}

export default TextProcess