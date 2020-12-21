import { SELECT_PRODUCT, CONFIRM_MEAL_ORDER, TOTAL_ORDER, REMOVE_ARTICLE, ORDER_COMPLETED } from '../../types'


const orderReducer = (state, action) => {
    switch(action.type) {
        case SELECT_PRODUCT:
            return {
                ...state,
                meal: action.payload
            }

        case CONFIRM_MEAL_ORDER:
            return {
                ...state,
                order: [action.payload, ...state.order]
            }

        case TOTAL_ORDER:
            return {
                ...state,
                totalOrder: action.payload
            }

        case REMOVE_ARTICLE:
            return {
                ...state,
                order: state.order.filter( meal => meal.id !== action.payload)
            }

        case ORDER_COMPLETED:
            return {
                ...state,
                order: [],
                totalOrder: 0, 
                orderId: action.payload
            }

        default:
            return state
    }
}
 
export default orderReducer