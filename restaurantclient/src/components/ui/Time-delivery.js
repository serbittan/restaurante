import React, { useState } from 'react'
import { setTimeDelivery } from '../../logic/'

const TimeDelivery = ({ order }) => {
    const { id } = order

    // State local de time.
    const [time, setTime] = useState(0)
    
    const defineTime = (id, time) => {
        (async () => {
            
            try {
                await setTimeDelivery(id, time)
                
            } catch (error) {
                console.log(error)
            }
        })()
    }
        


    return ( 
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Time Delivery</label>
            <input 
                type="number"
                placeholder="30"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                min="1"
                max="30"
                value={time}
                onChange={ event => setTime(parseInt(event.target.value))}
            />

            <button
                type="submit"
                className="bg-gray-800 hover:bg-gray-900 w-full p-2 mt-5 text-white uppercase font-bold rounded"
                onClick={() => defineTime(id, time)}

            >Set Time</button>
        </div>
     )
}
 
export default TimeDelivery