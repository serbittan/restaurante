import { firebase } from '../firebase/'

const retrieveOrders = (callback) => {
    firebase.db.collection('orders').where('completed', '==', false)
        .onSnapshot( snapshot => {
            const orders = snapshot.docs.map( doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            })
                // if (orders.length){

                    return callback(orders)

                // } else { 
                //     let error = new Error('no hay pedidos')
                //     return callback(error)
                // }
        })
}

export default retrieveOrders


// EJEMPLO hecho con 'PROMISES':
//dicho esto, la solucion pasa por simplemente envolver la parte firebase en una promise ya que no el metodo onSnapshot no soporta promises.Invita a una callback.(palabras de Manu)
// habria que ubicar el reject correctamente donde firebase lo indique, para manejo de posibles errores, y listo 

// const retrieveOrders = () => {

//     return new Promise((resolve, reject) => {
//         firebase.db.collection('orders').where('completed', '==', false).onSnapshot(snapshot => {
//             const orders = snapshot.docs.map(doc => {
//                 return {
//                     id: doc.id,
//                     ...doc.data()
//                 }
//             })
//             resolve(orders)
//         })
//     })
// }

// export default retrieveOrders


