import React from "react"
import ProductItem from "./ProductItem.jsx"

const ItemListContainer = () => {
    return (
        <div id="spanFilterContainer">
            <div id="productsContainer">
                <ProductItem name={"Producto de prueba"} stock={5} price={10000} imageName={"imageReact.png"}/>
            </div>
        </div>
    )
}

export default ItemListContainer