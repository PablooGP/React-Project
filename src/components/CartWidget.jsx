import React, { useState } from 'react'
import { useCartContext } from './CartContext.jsx'
import { ConvertPrice } from '../scripts/functions.js'
import { Link } from 'react-router-dom'

const CartWidget = () => {
	const Cart = useCartContext()
	Cart.SetUpdater(useState(0))

	return (
		<Link to={"/checkout"} className="topbarButton horizontalAlign">
			<img className="topbarButtonImg" src="/assets/cartIcon.png" alt="Carrito de compra" />
			<div id="cartText">{Cart.GetTotalProducts()}</div>
			<p>{`${ConvertPrice(Cart.GetTotalPrice(), ".")}`}</p>
		</Link>
	)
}

export default CartWidget