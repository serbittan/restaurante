import React, { Fragment, useContext } from 'react'
import { StyleSheet, Image } from 'react-native'
import { orderContext } from '../context/orders'
import { Container, Content, Text, Body, Footer, FooterTab, H1, Button, Card, CardItem } from 'native-base'
import globalStyles from '../styles/global'
import { useNavigation } from '@react-navigation/native'

const DetailMealScreen  = () => {
    // State de order.
    const { meal } = useContext(orderContext)
    const { name, category, price, description, image } = meal

    // Hook para redireccionar.
    const navigation = useNavigation()

    return ( 
        <Container style={globalStyles.container}>
            <Content style={globalStyles.content}>
                 <H1 style={globalStyles.title}>{name.charAt(0).toUpperCase() + name.slice(1)}</H1>
                 <Card>
                     <CardItem>
                         <Body>
                             <Image style={globalStyles.image} source={{ uri: image }}/>

                             <Text style={{ marginTop: 20 }}>{description}</Text>
                             <Text style={globalStyles.quantity}> Price:{price} €</Text>
                         </Body>
                     </CardItem>
                 </Card>
            </Content>
            <Footer>
                <FooterTab>
                    <Button 
                        style={globalStyles.button}
                        onPress={() => navigation.navigate("Form-meal")}
                    >
                        <Text style={globalStyles.buttonText}>Select</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
     )
}

const styles = StyleSheet.create({

})
 
export default DetailMealScreen 