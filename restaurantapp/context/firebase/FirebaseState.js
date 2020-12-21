import React, { useReducer } from 'react'
// Context & Reducer.
import { firebaseContext, firebaseReducer } from '.'
// File of firebase.
import firebase from '../../firebase/firebase'
import { GET_PRODUCTS_SUCCESS } from '../../types'
// Importamos lodash:(libreria de JS)
import _ from 'lodash'
import { getProductsDb } from '../../logic'



const FirebaseState = ({ children }) => {
    const initialState = {
        menu: []
    }

    console.log(firebase)

    // useReducer con dispatch para ejecutar las funciones.
    const [state, dispatch] = useReducer(firebaseReducer, initialState)

    // Obtener productos de base firebase.
    const getProducts = () => {

        try {
            // resultados de la base de datos.
            getProductsDb(meals => {
                // lodash para agrupar los menus por categoria.
                meals = _.sortBy(meals, "category")

                dispatch({
                    type: GET_PRODUCTS_SUCCESS,
                    payload: meals
                })
            })

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <firebaseContext.Provider
            value={{
                menu: state.menu,
                firebase,
                getProducts
            }}
        >
            { children}
        </firebaseContext.Provider>
    )
}

export default FirebaseState