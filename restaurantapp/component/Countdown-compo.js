import React from 'react'
import { Container, Text } from 'native-base'
import { StyleSheet, ImageBackground } from 'react-native'
import Countdown from 'react-countdown'
import globalStyles from '../styles/global'


const CountdownCompo = ({ timeDelivery }) => {
    // Function para renderizar la cuenta atrás.Countdown compo.
    const renderer = ({ minutes, seconds }) => {
        return (
            <Container style={ globalStyles.container } >


                <ImageBackground style={[globalStyles.bgImage, { width: 420, marginLeft: -10, marginBottom: 30 }]} source={require('../images/hourglass.jpg')}>
                <Text style={[globalStyles.title, { marginHorizontal: 20 , marginTop: 10}]}>Your order will be ready in:</Text>
                <Text style={styles.time}>{minutes} : {seconds}</Text>

                </ImageBackground>

            </Container > 

        ) 
    }


    return ( 
        <>
            <Text>
                <Countdown 
                    date={Date.now() + timeDelivery * 60000}
                    renderer={renderer}
                    />
            </Text>
        </>
     )
}

const styles = StyleSheet.create({
    time: {
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 30,
        fontSize: 60
    }
})
    
 
export default CountdownCompo