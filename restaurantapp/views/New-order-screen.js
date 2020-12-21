import React from 'react'
import { View, StyleSheet, ImageBackground } from 'react-native'
import { Container, Button, Text } from 'native-base'
import globalStyles from '../styles/global'
import { useNavigation } from '@react-navigation/native'

const NewOrderScreen = () => {

    // Activamos la navegación.
    const navigation = useNavigation()

    return (
        <Container style={globalStyles.container}>
            <ImageBackground style={globalStyles.bgImage} source={require('../images/soup.jpg')}>
                <View style={[styles.container, globalStyles.content]}>
                    <Button
                        style={globalStyles.button}
                        block
                        bordered
                        dark
                        rounded
                        onPress={() => navigation.navigate('Menu')}
                    >
                        <Text style={globalStyles.buttonText}>Your New order</Text>
                    </Button>
                </View>
            </ImageBackground>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center'
    },
    image: {
        flex: 1,
        resizeMode: "cover",
    }
})



export default NewOrderScreen