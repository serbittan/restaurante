import React, { useReducer } from 'react'
import { orderContext, orderReducer } from '.'
import { SELECT_PRODUCT, CONFIRM_MEAL_ORDER, TOTAL_ORDER, REMOVE_ARTICLE, ORDER_COMPLETED } from '../../types'

const OrderState = ({ children }) => {
    const initialState = {
        order: [],
        meal: null,
        totalOrder: 0,
        orderId: '',
    }

    // Functions del State
    const [state, dispatch] = useReducer(orderReducer, initialState)

    // Function para cuando el user selecciona un meal a ordenar.
    const selecProduct = pedido => {
        dispatch({
            type: SELECT_PRODUCT,
            payload: pedido
        })
    }

    // Function para añadir un meal al pedido general.
    const addMealOrder = meal => {
        dispatch({
            type: CONFIRM_MEAL_ORDER,
            payload: meal
        })
    }

    // Function que calcula el total de la order.
    const calculateTotalOrder = total => {
        dispatch({
            type: TOTAL_ORDER,
            payload:total
        })
    }

    // Fuction que elimina un artículo de la orden total.
    const removeArticle = id => {
        dispatch({
            type: REMOVE_ARTICLE,
            payload: id
        })
    }

    // Function que 
    const orderCompleted = orderId => {
        dispatch({
            type: ORDER_COMPLETED,
            payload: orderId
        })
    }

    

    return ( 
        <orderContext.Provider
            value={{
                order: state.order,
                meal: state.meal,
                totalOrder: state.totalOrder,
                orderId: state.orderId,
                selecProduct,
                addMealOrder,
                calculateTotalOrder,
                removeArticle,
                orderCompleted,
            }}
        >
            { children }
        </orderContext.Provider>
     )
}
 
export default OrderState