import React from "react"

import CartWidget from "./CartWidget.jsx"
import LoginWidget from "./LoginWidget.jsx"
import Searchbar from "./Searchbar.jsx"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbarContainer">
            <Link to={"/"} className="storebrand">
                <h1>{"PCCOMPONENTES"}</h1>
            </Link>

            <Searchbar/>

            <span className="buttonContainer horizontalAlign">
                <LoginWidget/>
                <CartWidget/>
            </span>

            <div className="navbar">
                <Link to={"/category/2"} className="navbarButton" type="button">EN DESCUENTO</Link>
                <Link to={"/category/1"} className="navbarButton" type="button">PRODUCTOS</Link>
                <Link to={"/category/3"} className="navbarButton" type="button">PROCESADORES</Link>
                <Link to={"/category/4"} className="navbarButton" type="button">MONITORES</Link>
                <Link to={"/category/5"} className="navbarButton" type="button">TARJETAS GRAFICAS</Link>
            </div>
        </div>
    )
}

export default Navbar