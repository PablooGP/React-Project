import React, { useState } from 'react'
import { useCartContext } from './CartContext'
import { ItemQuantitySelector } from './ItemDetail.jsx'
import { ConvertPrice } from '../scripts/functions.js'
import { Link, Navigate } from 'react-router-dom'
import { addDoc, collection, getFirestore } from 'firebase/firestore'

const Checkout = () => {

	const Cart = useCartContext()
	const [updater, setUpdater] = useState(0)
	const [redirect, setRedirect] = useState("")

	if (redirect.length>0) {
		return <Navigate to={`/brief/${redirect}`}/>
	}

	const createOrder = async () => {
		const db = getFirestore()
		const docRef = await addDoc(collection(db, "orders"), {
			products: Cart.GetAllProducts(),
			createDate: Date.now()
		});
		
		if (docRef.id) {
			Cart.Clear()
			setRedirect(docRef.id)
		}
	}

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
			<button type="button" className="endCheckout" onClick={createOrder} style={{ display: Cart.GetAllProducts() == 0 && "none" }}>Finalizar compra</button>
		</>
	)
}
export default Checkout