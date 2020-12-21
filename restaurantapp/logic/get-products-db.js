import firebase from '../firebase/firebase'

const getProductsDb = callback => {
    firebase.db.collection('products').where('stock', '==', true)
        .onSnapshot( snapshot => {
            const meals = snapshot.docs.map( doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            })
            callback(meals)
        })
}
 
export default getProductsDb