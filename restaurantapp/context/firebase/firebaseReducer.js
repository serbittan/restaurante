import { GET_PRODUCTS_SUCCESS } from '../../types'


const firebaseReducer = (state, action) => {
    switch(action.type) {
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                menu: action.payload
            }
            
        default:
            return state
    }
}

export default firebaseReducer