import React, { useContext } from 'react'
import { Button, Text } from 'native-base'
import globalStyles from '../styles/global'
import { useNavigation } from '@react-navigation/native'
import { orderContext } from '../context/orders'


const ButtonResume = () => {
    // State orders.
    const {order} = useContext(orderContext)

    const navigation = useNavigation()
    
    if (order.length === 0) return null


    return ( 
        <Button 
            style={globalStyles.button}
            onPress={() => navigation.navigate("Resume-order")}    
        >
            <Text style={globalStyles.buttonText}>Resume</Text>
        </Button>
     )
}
 
export default ButtonResume