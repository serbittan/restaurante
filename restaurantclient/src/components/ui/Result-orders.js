import React from 'react'
import { ItemOrder } from '.'

const ResultOrders = ({ orders }) => {
    return ( 
        <div className="sm:flex sm:flex-wrap -mx-3">
            {orders.map( (order, i) => (
                <ItemOrder order={order} key={order.id + i} />
            ))}
        </div>
     )
}
 
export default ResultOrders