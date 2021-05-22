import React from 'react'
import { storeProducts } from '../data'
import Product from './Product'
// import './css/Product.css'
import {ProductComsumer} from './Context'

export default function Products() {

    return (
        <div className='product-container-wrapper'>
            <ProductComsumer>
                {
                    value=>{
                        return value.products.map((item)=>{
                            return <Product item={item} key={item.id}/>
                        })
                    }
                }
            </ProductComsumer>
        </div>

    )
}
