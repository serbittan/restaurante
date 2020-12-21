import firebase from '../firebase/firebase'

const updateOrderFinish = id => {
    return (async () => {
        await firebase.db.collection('orders').doc(id).update({ completed: true })

        return
    })()
}
 
export default updateOrderFinish;