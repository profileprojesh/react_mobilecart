import React from 'react'
import './css/Product.css'
import PropTypes from 'prop-types'
import { ProductComsumer } from './Context'
import { Link } from 'react-router-dom'

export default function Product(props) {
    return (
        <ProductComsumer>
            {
                value => (
                    <div className='product-container'>
                        <div className='title'>
                            <h4>{props.item.title}</h4>
                        </div>
                        <Link to='/detail'>
                            <div className='image-container'
                                onClick={() => { value.handleDetail(props.item.id) }
                                }>
                                <img src={props.item.img} />
                            </div>
                        </Link>
                        <div className='cart-info'>
                            <h5>{props.item.company}</h5>
                            <p>Price $<span>{props.item.price}</span></p>

                        </div>
                        <div className='button'>
                            <button disabled={props.item.inCart ? true : false} onClick={() =>{
                                value.addToCart(props.item.id)
                                value.openModal(props.item.id)
                            } 
                            
                            }>
                                {
                                    props.item.inCart ? (
                                        'in cart'
                                    ) : (
                                        <i className='fas fa-cart-plus' />
                                    )
                                }
                            </button>
                        </div>
                    </div>

                )
            }

        </ProductComsumer>

    )
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    })
}


