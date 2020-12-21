import React from 'react'
import { Button, Text } from 'native-base'
import globalStyles from '../styles/global'
import { useNavigation } from '@react-navigation/native'
import { ImageBackground, StyleSheet } from 'react-native'


const ReadyOrder = () => {
    // Hook para redirección.
    const navigation = useNavigation()

    return (
        <>
            <ImageBackground style={[globalStyles.bgImage, { marginLeft: -10, paddingLeft: 10}]} source={require('../images/thumb.jpg')}>

                <Text style={styles.text}>Your order is Ready!!</Text>
                <Text style={styles.text}>You can pick up your order.</Text>

                <Button
                    style={[globalStyles.button, { marginTop: 160 }]}
                    block
                    rounded
                    onPress={() => navigation.navigate("New-order")}
                >
                    <Text style={globalStyles.buttonText}>Back to home Screen</Text>

                </Button>
            </ImageBackground>
        </>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: 'cover'
    },
    text: {
        textAlign: 'center',
        marginTop: 8,
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default ReadyOrder