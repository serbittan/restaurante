import React, { useContext, useEffect } from 'react'
import { Alert } from 'react-native'
import { Container, Content, List, ListItem, Body, Thumbnail, Text, Left, Button, H1, Footer, FooterTab, Right, Icon } from 'native-base'

import { orderContext } from '../context/orders'
import { useNavigation } from '@react-navigation/native'
import globalStyles from '../styles/global'
import { setOrderDb } from '../logic'

const ResumeOrderScreen = () => {
    // State de orders.
    const { order, totalOrder, calculateTotalOrder, removeArticle, orderCompleted } = useContext(orderContext)

    // Hook para redirección.
    const navigation = useNavigation()


    // Para dar el total con cada cambio de order
    useEffect(() => {
        subtotales()

    }, [order])


    // Function que calcula todos los subtotales.
    const subtotales = () => {
        let newTotal = 0
        newTotal = order.reduce( (newTotal, article) => newTotal + article.subtotal, 0)

        calculateTotalOrder(newTotal)
    }


    // Function para confirmar la orden antes de enviarla.
    // Añade la orden a la db.
    const confirmTotalOrder = () => {
        Alert.alert(
            'Are you sure to confirm the order?',
            'This action cannot be changed',
            [
                {text:'Cancel', style: 'cancel'},

                {text: 'Ok', 
                    // lo añadimos a la db. Creamos nuevo obj con información necesaria.
                    onPress: async () => {
                        const orderObj = {
                            timeDelivery: 0,
                            completed: false,
                            order: order, // Array
                            total: Number(totalOrder), // me aseguro de que siempre sea number.
                            created: Date.now()
                        }
                        try {
                            const response = await setOrderDb(orderObj)
                            orderCompleted(response.id)

                            navigation.navigate("Take-away")

                        } catch (error) {
                            console.log(error)
                        }
                    }
                }
            ]
        )
                    
    }

    // Function que eslimina el producto del resumen.
    const onDelete = (id) => {
        Alert.alert(
            'Are you sure want to delete it?',
            'This action cannot be recovered',
            [
                {text: 'Cancel', style: 'cancel'},
                {text: 'Confirm', onPress: () => removeArticle(id)}
            ]
        )
    }



    return ( 
        <Container style={globalStyles.container}>
            <Content style={globalStyles.content}>
                <H1 style={globalStyles.title}>Order Resume</H1>
                <List>
                    {order.map((pedido, i) => {
                        const { id, name, quantity, image, subtotal } = pedido

                        return (
                            
                            <ListItem 
                                key={id + i} // con esto creamos un id único(si pedimos 2 veces un mismo meal aparece error)
                                thumbnail
                            >
                                <Left>
                                    <Thumbnail  square large source={{ uri: image }}/>
                                </Left>


                                <Body>
                                    <Text>{name.charAt(0).toUpperCase() + name.slice(1)}</Text>
                                    <Text>Quantity: {quantity}</Text>
                                    <Text>Subtotal: {subtotal} €</Text>                                    
                                </Body>

                                <Right>
                                    <Button
                                        transparent 
                                        onPress={() => onDelete(id)}
                                    >
                                        <Icon name="trash-outline" style={[{fontSize: 25}, { color: '#000'}]}/>

                                    </Button>
                                </Right>
                                
                            </ListItem>
                        
                            
                        )
                    })}
                    
                </List>
                <Text style={globalStyles.quantity}>Total Payment: {totalOrder} €</Text>

                <Button
                    style={{ marginTop: 30, backgroundColor: '#696969' }}
                    full
                    rounded
                    onPress={ () => navigation.navigate("Menu")}
                >
                    <Text style={[globalStyles.buttonText, { color: '#fff'}]}>Buy More</Text>
                </Button>
            </Content>

            <Footer>
                <FooterTab>
                    <Button 
                        onPress={ () => confirmTotalOrder()}
                        style={globalStyles.button} >
                        <Text style={globalStyles.buttonText}>Order</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
     )
}
 
export default ResumeOrderScreen