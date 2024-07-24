import React from 'react'
import { CDN_URL } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice';


const ItemList = ({items}) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        // dispatch an action
        // whatever is passed to action it is sent as payload, action.payload
        dispatch(addItem(item))
    }

  return (
    <div>
        {items.map(item => {
            return <div key={item.card.info.id} className='p-2 m-2  border-b-2 border-gray-200 text-left flex justify-between'>
                <div>
                    <div className='py-2'>
                        <span>{item.card.info.name}</span>
                        <span> - ₹{item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
                    </div>
                    <p className='text-xs text-gray-400'>{item.card.info.description}</p>
                </div>

                <div className='relative'>
                    <img className='h-[150px] w-[200px] rounded-md' src={CDN_URL + item.card.info.imageId} alt="item_image"/>
                    <button className='p-2 bg-white shadow-lg  text-green-600 border-gray-200 absolute bottom-0 left-1/2' onClick = { () => { handleAddItem(item) } } >Add +</button>
                </div>
            </div>
        })}
    </div>
  )
}

export default ItemList