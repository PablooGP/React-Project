import React from 'react'
import { useCartContext } from './CartContext'
import { ItemQuantitySelector } from './ItemDetail.jsx'
import { ConvertPrice } from '../scripts/functions.js'

const Checkout = () => {

	const Cart = useCartContext()

	return (
		<div>
			{Cart.GetAllProducts().map((product, k) => {
				return (
					<div key={k} className="checkoutComponent">
						<img alt="" srcSet={`/images/${product.image}`} />
						<p>{product.name}</p>
						<ItemQuantitySelector def={product.units} mainButton={()=>Cart.RemoveProduct(product.id)} onChange={(newunits) => {Cart.SetQuantity(product.id, newunits)}} text={"Eliminar"}/>
						<p>{ConvertPrice(product.price*product.units, ".")}</p>
					</div>
				)
			})}
		</div>
	)
}
export default Checkout