import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Container, Content, Button, Text, Card, CardItem, Body } from 'native-base'
import globalStyles from '../styles/global'
import { QrScanner, NumberTable } from '../component/'

const EatHere = () => {
    const [scan, setScan] = useState(false)
    const [result, setResult] = useState()
    const [scanResult, setScanResult] = useState(true)


    const activeQr = () => {
        setScan(true)
    }

    const handleSuccess = e => {
        console.log('QR code scanned!', e)
        setScan(false)
        setScanResult(true)
        setResult(e)
        console.log(result)
        // número de mesa y redirección

    }

    return (
        <Container style={globalStyles.container}>
            <Content style={globalStyles.content}>
                {!scan && !scanResult && (
                    <>
                        <Card style={{ marginTop: 40, marginBottom: 80 }}>
                            <CardItem header>
                                <Text style={{ fontSize: 20 }}>Instruccions</Text>
                            </CardItem>

                            <CardItem>
                                <Body>
                                    <Text style={{ fontSize: 20, marginBottom: 10, marginLeft: 5 }}>Choose your table.</Text>
                                    <Text style={{ fontSize: 20, marginBottom: 10, marginLeft: 5 }}>Scan the <Text style={{ fontWeight: 'bold', fontSize: 20 }}>QR code{' '}</Text><Text style={{ fontSize: 20 }}>on your{' '}</Text><Text style={{ fontWeight: 'bold', fontSize: 20 }}>table.</Text></Text>
                                    <Text style={{ fontSize: 20, marginBottom: 10, marginLeft: 5 }}>Make the <Text style={{ fontWeight: 'bold', fontSize: 20 }}>payment{' '}</Text> of your order</Text>
                                    <Text style={{ fontSize: 20, marginBottom: 10, marginLeft: 5 }}>Wait comfortably. </Text>
                                    <Text style={{ fontSize: 20, marginBottom: 10, marginLeft: 5 }}>When the food is ready we will serve it to you.</Text>
                                </Body>
                            </CardItem>

                            <CardItem footer>
                                <Text style={{ fontSize: 20 }}>Enjoy!</Text>
                            </CardItem>

                        </Card>

                        <Button
                            block
                            rounded
                            onPress={() => activeQr()}
                            style={[globalStyles.button, { marginHorizontal: '2.5%' }]}
                        >
                            <Text style={globalStyles.buttonText}>scan</Text>
                        </Button>
                    </>
                )}
                
                {scan && !scanResult && <QrScanner onSuccess={handleSuccess}/>}

                {!scan && scanResult && <NumberTable result={result}/> }
            </Content >
        </Container >
    )
}

const styles = StyleSheet.create({
    cardView: {

    },
    button: {

    },
    buttonText: {

    }
})

export default EatHere
