import firebase from '../firebase/firebase'

const setOrderDb = obj => {

    return (async () => {
        const response = await firebase.db.collection('orders').add(obj)

        return response
    })()
}
 
export default setOrderDb