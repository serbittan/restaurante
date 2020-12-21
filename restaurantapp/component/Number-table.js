import React from 'react'
import { View } from 'react-native'
import { Container, Content, Text, Button, Card, CardItem, Body } from 'native-base'
import globalStyles from '../styles/global'

const NumberTable = ( { result }) => {
    return ( 
        <Container style={globalStyles.container}>
            <Content style={globalStyles.content}>
                <Card style={{ marginTop: 100, marginBottom: 100 }}>
                    <CardItem header>
                        <Text style={{ fontSize: 20}}>Your are here!</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text style={{ fontSize: 20}}>Table number: <Text style={{ fontSize: 40, textAlign: 'center', color: '#00FF7F'}}>{result}</Text></Text>
                        </Body>
                    </CardItem>
                    {/* <CardItem footer>
                        <Text>Next Step</Text>
                    </CardItem> */}
                </Card>
                <Button
                    block
                    rounded 
                    style={globalStyles.button}>
                    <Text style={globalStyles.buttonText}>Pay Your Order</Text>
                </Button>
            </Content>
        </Container>
     )
}
 
export default NumberTable