import React from 'react'
import {ProductComsumer} from './Context'
import './css/Modal.css'
import {Link} from 'react-router-dom'

export default function Modal() {
    return (
        <ProductComsumer>
            {
                (value)=>{
                    const {modalOpen, closeModal} = value
                    const {img, title, price} = value.modalProduct

                    if(!modalOpen){
                        return null
                    }
                    else{
                        return(
                            <div className='modal'>
                            <div className='modal-wrapper'>
                            <h3>{title}</h3>
                            <img src={img}/>
                            <h5>Price $ {price}</h5>
                            <Link to='/'>
                            <button className='modal-btn' onClick={()=>closeModal()}>
                                Store
                            </button>
                            </Link>
                            <Link to='/cart'>
                            <button className='modal-btn' onClick={()=>closeModal()}>
                                Checkout
                            </button>
                            </Link>
                            </div>
                            </div>
                        )
                    }
                }
            }
        </ProductComsumer>
    )
}
