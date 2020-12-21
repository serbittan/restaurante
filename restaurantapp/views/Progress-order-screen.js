import React, { useContext, useEffect, useState } from 'react'
import { View } from 'react-native'
import { Container, Text } from 'native-base'
// Countdown para poner el tiempo entrega en regresivo.
import Countdown from 'react-countdown'

import { orderContext } from '../context/orders'
import globalStyles from '../styles/global'

import { getTimeDelivery } from '../logic/'

import { TextProcess, ReadyOrder, CountdownCompo } from '../component'



const ProgressOrderScreen = () => {
    // State local para timeDelivery & completed.
    const [timeDelivery, setTimeDelivery] = useState(0)
    const [completed, setCompleted] = useState(false)

    // State de orders.
    const { orderId } = useContext(orderContext)

    useEffect(() => {
        getTimeDelivery(orderId, data => {
            const { timeDelivery, completed } = data

            setTimeDelivery(timeDelivery)
            
            setCompleted(completed)
        })

    }, [])


    
        
    return (
        <Container style={globalStyles.container}>
            <View style={[globalStyles.content, { marginTop: 50 }]}>
                {timeDelivery === 0 && <TextProcess />}

                {timeDelivery > 0 && !completed && <CountdownCompo timeDelivery={timeDelivery} />}

                {timeDelivery > 0 && completed && <ReadyOrder />}

            </View>
        </Container>
    )
}

export default ProgressOrderScreen