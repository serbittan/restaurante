import React, { useEffect, useState } from 'react'
import { retrieveOrders } from '../../logic'
import { ResultOrders } from '../../components/ui/'


const Orders = () => {
  // State local.
  const [orders, setOrders] = useState([])
  const [notifications, setNotifications] = useState(0)

  useEffect(() => {
    retrieveOrders(orders => {
      setOrders(orders)
      setNotifications(orders.length)
      
    }, error => alert(error.message))
  }, [])

  if (!orders.length) return <h1 className="text-3xl font-light mb-4">Not Orders Yet!!</h1>

  return (
    <>
      <h1 className="text-3xl font-light mb-4">Orders: {notifications}</h1>
      <ResultOrders orders={orders} />
    </>
  )
}

export default Orders