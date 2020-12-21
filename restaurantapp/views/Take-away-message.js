import React from 'react'
import { moduleName, StyleSheet } from 'react-native'
import { Container, Content, Text, Button } from 'native-base'
import globalStyles from '../styles/global'
import { useNavigation } from '@react-navigation/native'


const TakeAwayMessage = () => {
    const navigation = useNavigation()

    return ( 
        <Container style={globalStyles.container}>
            <Content style={globalStyles.content}>
                <Text style={styles.text}>Choose your preference</Text>
                <Button 
                    style={[globalStyles.button, {marginTop: 200, marginBottom: 100}]}
                    full
                    rounded
                    onPress={() => navigation.navigate("Progress-order")}
                    >
                    <Text style={globalStyles.buttonText}>Take Away</Text>
                </Button>

                <Button 
                    style={globalStyles.button}
                    full
                    rounded
                    >
                    <Text 
                        style={globalStyles.buttonText}
                        onPress={() => navigation.navigate("Eat-here")}
                        >Eat Here</Text>
                </Button>

            </Content>
        </Container>
     )
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        marginTop: 60,
        // fontWeight: '',
        fontSize: 40
    }
})
 
export default TakeAwayMessage