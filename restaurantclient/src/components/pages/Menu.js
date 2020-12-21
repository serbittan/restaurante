import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { FirebaseContext } from '../../firebase'

import { ResultMeals } from '../ui'

const Menu = () => {
    // State de meals.
    const [meals, setmeals] = useState([])

    // State de Firebase.
    const { firebase } = useContext(FirebaseContext)

    // El .get nos devuelve los meals pero no en tiempo real. 
    // useEffect(() => {
    //     const getMeals = async() => {
    //         const response = await firebase.db.collection('productsf').get()

    //         response.forEach(meal => {
    //             console.log(meal.data())
    //         });
    //     }
    //     getMeals()

    // }, [])

    // Para hacerlo en tiempo real sería de la siguiente forma: (Snapshot)
    useEffect(() => {
         try{
        firebase.db.collection('products').onSnapshot(handleSnapshot)

         } catch (error) {
             console.log(error)
         }
        // eslint-disable-next-line
    }, [])
        


    // Snapshot nos permite usar la base en tiempo real de firestore.
    const handleSnapshot = snapshot => {
        const meals = snapshot.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data()
            }
        })
        setmeals(meals)
    }

    return (
        <>
            <h1 className="text-3xl font-light mb-4">Menu</h1>
            <ResultMeals meals={meals}/>

            <Link to="/new-meal" className="bg-blue-800 hover:bg-blue-700 inline-block mb-5 p-2 text-white uppercase font-bold">Add New Meal</Link>
        </>
    )
}

export default Menu