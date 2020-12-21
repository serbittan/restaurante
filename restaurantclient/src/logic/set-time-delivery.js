import { firebase } from '../firebase/'

const setTimeDelivery = (id, time) => {

    return (async () => {
        await firebase.db.collection('orders').doc(id)
            .update({ 
                timeDelivery: time 
            })

            return 
    })()
}

export default setTimeDelivery

