import React from 'react'


const DetailOrder = ({ meal }) => {
    const { name, quantity } = meal
    console.log(name)
    return (

        <p className="text-gray-600">{quantity} - {name.charAt(0).toUpperCase() + name.slice(1) }</p>

    )
}

export default DetailOrder