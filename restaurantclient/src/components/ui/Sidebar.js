import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom' //NavLink y Link funcionan igual pero al 1º le puedes añadir la activeClassName para darle estilo particular.
import { retrieveOrders } from '../../logic'


const Sidebar = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        retrieveOrders(orders => {
            setOrders(orders)
            console.log(orders.length)
        })
    }, [])


    return (
        <div className="md:w-2/6 xl:w-1/6 bg-gray-800">
            <div className="p-6">
                <p className="uppercase text-white text-2xl tracking-wide text-center font-bold">Restaurant-App</p>
                <p className="text-gray-500 text-center">Manage your Restaurant in the following options:</p>

                <nav className="mt-10">
                    <NavLink exact to="/menu" activeClassName="text-yellow-500" className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900">Menu</NavLink>
                    <NavLink exact to="new-meal" activeClassName="text-yellow-500" className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900">New Meal</NavLink>
                    <NavLink exact to="/" activeClassName="text-yellow-500" className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900">Orders
                        {orders.length !== 0 &&
                            <span className="bg-red-700 text-white ml-3 rounded px-2 py-2 ">{orders.length}</span>}
                    </NavLink>
                </nav>

            </div>
        </div>
    )
}




export default Sidebar