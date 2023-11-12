import React from "react"

import CartWidget from "./CartWidget.jsx"
import LoginWidget from "./LoginWidget.jsx"
import Searchbar from "./Searchbar.jsx"

const Navbar = () => {
    return (
        <div className="navbarContainer">
            <div className="storebrand">
                <h1>{"PCCOMPONENTES"}</h1>
            </div>

            <Searchbar/>

            <span className="buttonContainer horizontalAlign">
                <LoginWidget/>
                <CartWidget/>
            </span>

            <div className="navbar">
                <a className="navbarButton" type="button" href="http://localhost:3000/descuentos">EN DESCUENTO</a>
                <a className="navbarButton" type="button" href="http://localhost:3000/products">PRODUCTOS</a>
                <a className="navbarButton" type="button" href="http://localhost:3000/contacto">CONTÁCTANOS</a>
                <a className="navbarButton" type="button" href="http://localhost:3000/nuevo-producto">CREAR PRODUCTO</a>
                <a className="navbarButton" type="button" href="http://localhost:3000/pedidos">MIS PEDIDOS</a>
            </div>
        </div>
    )
}

export default Navbar