import React, { useContext, useRef } from 'react'
import { FirebaseContext } from '../../firebase'


const ItemMeal = ({ meal }) => {
    const { id, name, image, category, price, description, stock } = meal

    // Context de firebase.
    const { firebase } = useContext(FirebaseContext)

    // Stock de ref para acceder al valor directamente.
    const stockRef = useRef(stock)

    // Modificar el stado del meal en firebase.
    const updateStock = () => {
        // tricky: en firebase 'stock' es un boolean no una string. Hay que convertir un string a bool.
        const stock = (stockRef.current.value === "true") // acceder al value del elemento en el Dom.

        try {
            firebase.db.collection('products').doc(id).update({ stock })
        } catch (error) {
            console.log(error)
        }

    }

    return ( 
        <div className="w-full px-3 mb-4">
            <div className="p-5 shadow-mb bg-white">
                <div className="lg: flex">
                    <div className="lg:w-5/12 xl:w-3/12">
                        <img src={image} alt="meal" />
                        <div className="sm:flex sm:-mx-2 pl-2">
                            <label className="block mt-5 sm:w-2/4">
                                <span className="block text-gray-800 mb-2">Stock</span>

                                <select 
                                    className="bg-white shadow appearance-none border rounded  py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                    value={stock}
                                    ref={stockRef}
                                    onChange={() => updateStock()}
                                >
                                    <option value="true">Available</option>
                                    <option value="false">Not Available</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className="lg:w-7/12 xl:w-9/12 pl-5" >
                        <p className="font-bold text-2xl text-yellow-600 mb-4">{name.charAt(0).toUpperCase() + name.slice(1)}</p>
                        <p className="text-gray-600 mb-4">Category: <span className="text-gray-700 font-bold">{category.toUpperCase()}</span></p>
                        <p className="text-gray-600 mb-4">{description.charAt(0).toUpperCase() + description.slice(1)}</p>
                        <p className="text-gray-600 mb-4">Price: <span className="text-gray-700 font-bold">{price} € </span></p>
                    </div>
                </div>
            </div>
            
        </div>
     )
}
 
export default ItemMeal