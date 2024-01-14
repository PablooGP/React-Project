import React, { useState } from 'react'
import { useCartContext } from './CartContext'
import { ItemQuantitySelector } from './ItemDetail.jsx'
import { ConvertPrice } from '../scripts/functions.js'

const Checkout = () => {

	const Cart = useCartContext()
	const [updater, setUpdater] = useState(0)



	return (
		<>
			<div className="checkoutContainer">
				{Cart.GetAllProducts().map((product, k) => {

					const onChange = (newunits) => {
						Cart.SetQuantity(product.id, newunits)
						setUpdater(updater + 1)
					}

					return (
						<div key={k} className="checkoutComponent">
							<img alt="" srcSet={`/images/${product.image}`} />
							<h2>{product.name}</h2>
							<ItemQuantitySelector def={product.units} mainButton={() => Cart.RemoveProduct(product.id)} onChange={onChange} text={"Eliminar producto"} classes="checkoutRight" />
							<h3>{ConvertPrice(product.price * product.units, ".")}</h3>
						</div>
					)
				})}
			</div>
			<button className="endCheckout" type="button" style={{display: Cart.GetAllProducts()==0 && "none"}}>

			</button>
		</>

	)
}
export default Checkout