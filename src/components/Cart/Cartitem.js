import React from 'react'

export default function Cartitem({item, value}) {
    return (
        <div className='item-header'>
            <img src={item.img} alt='image'  style={{width:'5rem'}}/>
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <div>
                <span className='qty-btn' onClick={()=>value.decrement(item.id)}>-</span>
                <span>{item.count}</span>
                <span className='qty-btn' onClick={()=>value.increment(item.id)}>+</span>
            </div>
            <h3>{item.total}</h3>
            <span className='fas fa-trash' style={{alignItem:'center', cursor:'pointer'}} onClick={()=> value.removeitem(item.id)}></span>
        </div>
    )
}
