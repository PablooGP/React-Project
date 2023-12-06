import React from 'react'
import { ConvertPrice } from "../scripts/functions.js"
import { Link, NavLink } from 'react-router-dom'

const ProductItem = ({name, stock, price, imageName, id}) => {
    let stockText = "MUCHO STOCK"
    let stockClass = "productStockDisp-type1"
    const hasStock = stock>0
    if (stock >= 1 && stock <= 12 ) {
        stockText = "POCO STOCK"
        stockClass = "productPocoStock-type1"
    } else if (stock <= 0) {
        stockText = "SIN STOCK"
        stockClass = "productNostock-type1"
    }

    return (
        <Link to={`/item/${id}`} className="productoFrame-type1">
            <div className="productImage-type1">
                <img className="productImage-type1" srcSet={`/assets/${imageName}`} alt={name}/>
            </div>
            <p className="productTitle-type1">{name}</p>
            <div className="productSeparador-type1">
            </div>
            <div style={{width: "100%", height: "0px"}}>
            </div>
            <p className={`productStock-type1 ${stockClass}`}>{stockText}</p>
            <p className="productPrice-type1">{ConvertPrice(price, ".")}</p>
            <div className="cartContainer-type1" hidden={!hasStock}>
                <button className="productAddCart-type1" type="button">
                    <img className="fullSize" srcSet="/assets/cartIcon.png" title="Añadir al carrito"/>
                </button>
            </div>
        </Link>
    )
}

export default ProductItem