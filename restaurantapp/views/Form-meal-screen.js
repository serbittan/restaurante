import React, { useContext, useState, useEffect } from 'react'
import { Alert } from 'react-native'
import { Container, Content, Grid, Col, Button, Text, Form, Icon, Input, Footer, FooterTab } from 'native-base'
import globalStyles from '../styles/global'

import { orderContext } from '../context/orders'
import { useNavigation } from '@react-navigation/native'



const FormMealScreen = () => {
    // State local de quantity.
    const [quantity, setquantity] = useState(1)
    // State local de subtotal.
    const [subtotal, setSubtotal] = useState(0)

    // State de orders.
    const { meal, addMealOrder } = useContext(orderContext)
    const { price } = meal

    useEffect(() => {
        calculateSubtotal()

    }, [quantity])

    // Hook para redireccionar.
    const navigation = useNavigation()

    // Functions para incrementar o decrementar el la quantity del producto.
    const decreaseOne = () => {
        if (quantity > 1) {
            const newQuantity = parseInt(quantity) - 1
            setquantity(newQuantity)
        }
    }

    const increaseOne = () => {
        const newQuantity = parseInt(quantity) + 1

        setquantity(newQuantity)
    }

    // Function que calcula el subtotal.(La pondremos en useEffect para que lo haga automaticamente)
    const calculateSubtotal = () => {
        const resultado = price * quantity
        
        setSubtotal(resultado)
    }

    // Function de confirmación orden.
    const confirmationMessage = () => {
        Alert.alert(
            "Great",
            "Your selecction has been added to order",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => {
                    // creamos nuevo objeto para añadir campos como cantidad(Esto lo recibe la base de datos para preparar pedido)
                    const pedido = {
                        ...meal,
                        quantity,
                        subtotal
                    }
                    addMealOrder(pedido)
                    navigation.navigate("Resume-order") 
                }}
            ]
        )
    }

    return (
        <Container>
            <Content>
                <Form>
                    <Text style={globalStyles.title}>Quantity</Text>
                    <Grid>
                        <Col>
                            <Button
                                full
                                rounded
                                dark
                                style={{ height: 80, marginLeft: 15 }}
                                onPress={() => decreaseOne()}

                            >
                                <Icon style={{ fontSize: 40 }} name="remove" />
                            </Button>
                        </Col>
                        <Col>
                            <Input
                                style={{ textAlign: 'center', fontSize: 20  }}
                                keyboardType='numeric'
                                value={quantity.toString()}
                                onChangeText={quantity => setquantity(quantity)}
                            />
                        </Col>
                        <Col>
                            <Button
                                full
                                rounded
                                dark
                                style={{ height: 80, marginRight: 15 }}
                                onPress={() => increaseOne()}

                            >
                                <Icon style={{ fontSize: 40 }} name="add" />
                            </Button>
                        </Col>

                    </Grid>
                    <Text style={globalStyles.quantity}>Subtotal: {subtotal} €</Text>
                    
                </Form>
            </Content>
            <Footer>
                <FooterTab>
                    <Button 
                        style={globalStyles.button} 
                        onPress={ () => {
                            confirmationMessage()
                        }}
                    >
                        <Text style={globalStyles.buttonText}>Add to Order</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    )
}

export default FormMealScreen