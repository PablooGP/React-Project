import React, { useState } from 'react'

const CartWidget = () => {

    const [cartData, setCartData] = useState({
        total: 0, // precio total del carrito
        items: 0 // cantidad de productos en el carrito
    })

    return (
        <span className="topbarButton horizontalAlign">
            <img className="topbarButtonImg" src="/assets/cartIcon.png" alt="Carrito de compra" />
            <div id="cartText">{cartData.items}</div>
            <p>{`$ ${cartData.total}`}</p>
        </span>
    )
}

export default CartWidget