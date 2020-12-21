import firebase from '../firebase/firebase'


const setFormMeal = async data => {

    await firebase.db.collection('products').add(data)

    return
}
 
export default setFormMeal