import React from 'react'
import { DetailOrder, TimeDelivery, OrderFinish } from '.'

const ItemOrder = ({ order }) => {
    console.log(order)
    return ( 
        <div className="sm:w-1/2 lg:w-1/3 px-2 mb-4">
            <div className="p-3 shadow-md bg-white">
                <p className="text-yellow-600 text-sm font-bold">{order.id}</p>
                {order.order.map((meal, i) => 
                    <DetailOrder meal={meal} key={meal.id + i}/>
                )}
                <p className="text-gray-700 font-bold">Total Payment:{order.total}</p> 

                {order.timeDelivery === 0 && 
                    <TimeDelivery order={order} /> 
                }  

                {order.timeDelivery > 0 && 
                    <OrderFinish order={order} />
                }

            </div>
        </div>
     )
}
 
export default ItemOrder