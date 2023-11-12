import React from 'react'
import { ConvertPrice } from "../scripts/functions.js"

const ProductItem = ({name, stock, price, imageName}) => {
    return (
        <div className="productoFrame-type1">
            <a className="productImage-type1">
                <img className="productImage-type1" srcSet={`/assets/${imageName}`} alt={name}/>
            </a>
            <p className="productTitle-type1">{name}</p>
            <div className="productSeparador-type1">
            </div>
            <div style={{width: "100%", height: "0px"}}>
            </div>
            <p className="productStock-type1 productPocoStock-type1">{ stock <= 10 ? "POCO STOCK" : "MUCHO STOCK"}</p>
            <p className="productPrice-type1">{ConvertPrice(price, ".")}</p>
            <div className="cartContainer-type1">
                <button className="productAddCart-type1" type="button">
                    <img className="fullSize" srcSet="/assets/cartIcon.png" title="Añadir al carrito"/>
                </button>
            </div>
        </div>
    )
}

export default ProductItem