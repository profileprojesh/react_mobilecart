import React from 'react'
import EmptyCart from './EmptyCart'
import {ProductComsumer} from '../Context'
import '../css/Cart.css'
import Cartitem from './Cartitem'
import CartSummary from './CartSummary'

export default function Cart() {
    return (
        <>
        <div>
            <h1>Your Cart</h1>

        </div>
        <ProductComsumer>
            {
                (value)=>{
                    const {cart} = value
                    if(cart.length>0){
                        return(
                            <>
                            <div className='item-header'>
                                <h3>Product</h3>
                                <h3>Title</h3>
                                <h3>Price</h3>
                                <h3>Quantity</h3>
                                <h3>Total</h3>
                                <h3>Remove Item</h3>
                            </div>
                            {cart.map((item)=>{
                                return(
                                    <Cartitem item={item} value = {value} key={item.id} />
                                )
                            })}
                            <CartSummary value={value}/>
                
                            </>
                        )
                    }
                    else{
                        return(
                            <EmptyCart/>
                        )
                    }
                }
        
            }
        </ProductComsumer>
        </>
    )
}
