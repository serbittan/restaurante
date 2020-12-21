import React from 'react'
import { updateOrderFinish } from '../../logic/'

const OrderFinish = ({ order }) => {
    const { id } = order

    const orderFinish = id => {
        (async () => {
            try {
                await updateOrderFinish(id)

            } catch (error) {
                console.log(error)
            }
        })()
    }


    return ( 
       
        <>
            <p className="text-gray-700">Time Delivery: <span className="font-bold">{order.timeDelivery} min</span></p>
            <button 
                type="button"
                className="bg-red-500 hover:bg-red-900 w-full p-2 mt-5 text-white uppercase font-bold rounded"
                onClick={() => orderFinish(id)}
            >
                Finish
            </button>
        </>
     )
}
 
export default OrderFinish