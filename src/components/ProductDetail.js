import React from 'react'
import {ProductComsumer} from './Context'
import './css/Productdetail.css'
import {Link} from 'react-router-dom'

export default function ProductDetail() {
return (
<>
    <ProductComsumer>
        {value => {
        const {id,company, img, price, title,inCart, info } = value.productDetail;
        return(
        <>
            <div className='detail-container'>
                <div className='first-section'>
                    <h3>{title}</h3>
                    <img src={img} alt='product-img' />

                    <h4>made by {company}</h4>
                </div>
                <div className='second-section'>
                    <p>{info}</p>
                    <h5>Price {price}</h5>

                </div>
            </div>
            <div className="btn-container">
                <Link to='/'>
                <button className='btn-detail'>Continue Shopping</button>
                </Link>
                    <button className='btn-detail' disabled={inCart?true:false} onClick={()=>{
                        value.addToCart(id)
                        value.openModal(id)
                    }}>
                        {inCart?'in cart':'Add To Cart'}
                    </button>
            </div>
        </>
        )
        }}
    </ProductComsumer>
</>
)
}
