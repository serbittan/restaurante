import React, { useContext, useEffect, Fragment } from 'react'
import { StyleSheet } from 'react-native'
import { firebaseContext } from '../context/firebase'
import { orderContext } from '../context/orders'
import globalStyles from '../styles/global'
import { useNavigation } from '@react-navigation/native'

import {
    Container,
    Content,
    Separator,
    List,
    ListItem,
    Thumbnail,
    Text,
    Body
} from 'native-base'

const MenuScreen = () => {
    // State de firebase.
    const { menu, getProducts } = useContext(firebaseContext)

    // State de orders.
    const { selecProduct } = useContext(orderContext)

    // Para redireccionar.
    const navigation = useNavigation()

    useEffect(() => {
        getProducts()

    }, []);


    // function para mostrar heading de category. Aquí será útil de <Separator>.
    const showHeading = (category, index) => {
        // Esta función será llamada antes de <ListItem>

        if (index > 0) { // de esta forma arreglamos el undefined que aparece en el index = 0 ya que la posición -1 del array no existe.
            const categoryAnterior = menu[index - 1].category
            if (categoryAnterior !== category) {
                return (
                    <Separator style={styles.separator}>
                        <Text style={styles.separatorTexto}>{category}</Text>
                    </Separator>
                )
            }

        } else { // código que añadimos para que pinte el heading de category cuando index = 0
            return (
                <Separator style={styles.separator}>
                    <Text style={styles.separatorTexto}>{category}</Text>
                </Separator>
            )
        }
    }


    return (
        <Container style={globalStyles.container}>
            <Content style={{ backgroundColor: '#fff' }}>
                <List>
                    {menu.map((meal, index) => {
                        const { id, name, description, price, image, category } = meal
                       
                        return (
                            <Fragment key={id}>

                                {/* función que establecerá los headings de category. Tenemos que pasarle un índice para decir la posición del array */}
                                {showHeading(category, index)}

                                <ListItem
                                    onPress={() => {
                                        // tip para eliminar una propiedad de un objeto.(en este caso elimino 'stock')
                                        const {stock, ...meal2} = meal
                                        
                                        selecProduct(meal2)
                                        navigation.navigate("Detail-meal")
                                    }}
                                    
                                >
                                    <Thumbnail large square source={{ uri: image }} />

                                    <Body>
                                        <Text style={{ fontWeight: 'bold' }}>{name.charAt(0).toUpperCase() + name.slice(1)}</Text>
                                        <Text style={{ color:'#708090'}} numberOfLines={2}>{description}</Text>
                                        <Text>Price: € {price}</Text>
                                    </Body>
                                </ListItem>
                            </Fragment>
                        )
                    })}
                </List>
            </Content>

        </Container>
    )
}

const styles = StyleSheet.create({
    separator: {
        backgroundColor: '#000'
    },
    separatorTexto: {
        color: '#FFFF00',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }

})

export default MenuScreen