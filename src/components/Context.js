import React, { useState, useEffect } from 'react'
import { storeProducts, detailProduct } from '../data'
import ProductDetail from './ProductDetail'

const ProductContext = React.createContext()

function ProductProvider(props) {
    let [products, setProducts] = useState([])
    let [productDetail, setProductDetail] = useState(detailProduct)
    let [cart, setCart] = useState([])
    let [modalOpen, setModalOpen] = useState(false)
    let [modalProduct, setModalProduct] = useState(detailProduct)
    let [total, setTotal] = useState(0)
    let [subTotal, setSubTotal] = useState(0)
    let [tax, setTax] = useState(0)



    let copyProduct = () => {
        let products = []
        storeProducts.forEach(item => {
            const singleproduct = { ...item }
            products = [...products, singleproduct]
        })
        setProducts(products)
    }

    useEffect(() => {
        copyProduct()
        calcTotal()

    }, [products, cart])

    let getProduct = (id) => {
        return products.find(item => item.id === id)
    }

    let handleDetail = (id) => {
        setProductDetail(() => getProduct(id))
    }



    let calcTotal = () => {
        let subtotal = 0
        console.log('cart', cart)
        cart.map((item) => {
            subtotal += item.price * item.count
        })
        const tax = subtotal * 0.02
        const total = subtotal + tax
        setSubTotal(() => subtotal)
        setTax(tax)
        setTotal(() => total)
    }

    let addToCart = (id) => {
        let tempProducts = [...products]
        const index = tempProducts.indexOf(getProduct(id))
        let product = tempProducts[index]
        product.inCart = true
        product.count = 1
        product.total = product.price
        setProducts(() => tempProducts)
        setCart(() => [...cart, product])
    }

    let openModal = (id) => {
        const product = getProduct(id)
        setModalProduct(() => product)
        setModalOpen(() => true)
    }

    let closeModal = () => {
        setModalOpen(() => false)
    }
    let increment = (id) => {
        const tempcart = [...cart]
        const selectedproduct = cart.find(item => item.id === id)
        const index = tempcart.indexOf(selectedproduct)
        const product = tempcart[index]
        product.count += 1
        product.total = product.price * product.count
        setCart(() => [...tempcart])

    }
    let decrement = (id) => {
        let tempcart = [...cart]
        const selectedproduct = tempcart.find(item => item.id === id)
        const index = tempcart.indexOf(selectedproduct)
        const product = tempcart[index]
        product.count -= 1
        if (product.count <= 0) {
            // product.count =0
            removeitem(id)
        }
        else {
            product.total = product.price * product.count
            setCart(() => [...tempcart])

        }

    }
    let removeitem = (id) => {
        let tempcart = [...cart]
        const tempproducts = [...products]
        tempcart = tempcart.filter(item => item.id != id)
        const index = tempproducts.indexOf(getProduct(id))
        const product = tempproducts[index]
        product.inCart = false
        product.count = 0
        setProducts(tempproducts)
        setCart(tempcart)
    }

    let clearCart = () => {
        copyProduct()
        setCart([])
    }



    return (
        <ProductContext.Provider value={{
            products, productDetail, handleDetail, addToCart, modalOpen, modalProduct, openModal, closeModal, cart, increment, decrement, removeitem, total, subTotal, tax, clearCart
        }}>{props.children}
        </ProductContext.Provider>
    )

}

const ProductComsumer = ProductContext.Consumer

export { ProductProvider, ProductComsumer }