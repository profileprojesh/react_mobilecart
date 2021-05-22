import React from 'react'

export default function CartSummary({value}) {

    return (
        <div className='cart-summary'>
            <button onClick={()=>value.clearCart()}>Clear Cart</button>
            <p>Subtotal {value.subTotal}</p>
            <p>Total {value.total}</p>
        </div>
    )
}
