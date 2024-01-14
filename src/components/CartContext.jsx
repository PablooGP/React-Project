import React, { useState, useContext, createContext } from "react"

const CartContext = React.createContext("")
export const useCartContext = () => useContext(CartContext)

class CartClass {
	constructor ({products}) {
		const cartSaved = JSON.parse(localStorage.getItem("cart") || "[]")
		const [cart, setCart] = useState(products || cartSaved || [])
		this.cart = cart
		this.setCart = setCart
	}


	#SaveCart = () => {
		this.Updater[1](this.Updater[0]+1)
		localStorage.setItem("cart", JSON.stringify(this.cart))
	}

	SetUpdater = (Updater) => {
		this.Updater = Updater
	}

	GetProduct = (id) => {
		const i = this.cart.findIndex(e => e.id == id)
		return {
			IsIn: i>-1,
			Index: i
		}
	}

	GetAllProducts = () => this.cart

	SetQuantity = (id, newUnits) => {
		const Data = this.GetProduct(id)
		if (Data.IsIn) {
			this.cart[Data.Index].units = newUnits
			this.setCart(this.cart)
		}
		this.#SaveCart()
	}

	AddProduct = (product, units) => {
		const Data = this.GetProduct(product.id)
		if (Data.IsIn) {
			this.cart[Data.Index].units += units
			this.setCart(this.cart)
		} else {
			this.setCart([...this.cart, {...product, units}])
		}
		this.#SaveCart()
	}

	GetTotalPrice = () => this.cart.reduce((accumulator, product) => accumulator + product.price * product.units, 0)
	GetTotalProducts = () => this.cart.reduce((accumulator, product) => accumulator + product.units, 0)

	RemoveProduct = (id) => {
		const newCart = this.cart.filter(prod => prod.id != id)
		this.setCart(newCart)
		localStorage.setItem("cart", JSON.stringify(newCart))
	}

	Clear = () => {
		this.cart = []
		this.setCart([])
		this.#SaveCart()
	}


}

const CartProvider = ({children}) => {
	return (
		<CartContext.Provider value={new CartClass([])}>{children}</CartContext.Provider>
	)
}

export default CartProvider