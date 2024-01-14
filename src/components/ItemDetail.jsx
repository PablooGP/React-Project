import React, { useEffect, useState } from 'react'
import { ConvertPrice } from '../scripts/functions'
import { useCartContext } from './CartContext.jsx'

const ItemQuantitySelector = ({ def, mainButton, text, onChange, classes }) => {

	const [amount, setAmount] = useState(def || 1)
	const amountFunction = (add) => {
		// Se tomara el valor entre 1 y 10
		setAmount(Math.min(25, Math.max(1, amount + add)))
		
	}

	useEffect(() => {
		if (onChange) {
			onChange(amount)
		}
	}, [amount])

	return (
		<div className={"horizontal " + classes || " "}>
			<div className="horizontal">
				<button type="button" className="inputDetailButton detailButtonRemove" style={{display:amount==1&&onChange&&"none"}} onClick={() => amountFunction(-1)}>{"-"}</button>
				<p className="itemDetailInputText">{amount}</p>
				<button type="button" className="inputDetailButton detailButtonAdd" onClick={() => amountFunction(1)}>{"+"}</button>
			</div>
			<button type="button" className="itemDetailAddToCart" onClick={() => mainButton(amount)}>
				<p>{text}</p>
			</button>
		</div>
	)
}

const ItemDetail = ({ product }) => {

	const Cart = useCartContext()

	const addProduct = (amount) => {
		return Cart.AddProduct(product, amount)
	}

	return (
		<span className="itemDetailContainer">
			<div className="holder">
				<img srcSet={`/images/${product.image}`} alt="" className="itemDetailImage" />
			</div>
			<div className="holder detailInfoContainer">
				<h2 className="itemDetailTitle">{product.name}</h2>
				<p className="itemDetailDescription">{product.description || ""}</p>
				<p className="itemDetailStockType">{product.stock > 0 ? "Stock disponible" : "Sin stock disponible"}</p>
				<p className="itemDetailProductPrice">{ConvertPrice(product.price - product.discount, ".")}</p>
				<span>
					<ItemQuantitySelector mainButton={addProduct} text="Agregar al carrito"/>
				</span>
			</div>
		</span>
	)
}

export { ItemDetail, ItemQuantitySelector }