import firebase from '../firebase/firebase'

const getTimeDelivery = (id, callback) => {
    firebase.db.collection('orders').doc(id)
        .onSnapshot(doc => {
            const data = doc.data()


            return callback(data)
        })
}
    
export default getTimeDelivery
            
    