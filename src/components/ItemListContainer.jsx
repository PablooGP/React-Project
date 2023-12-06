import React, { useEffect, useState } from "react"
import ProductItem from "./ProductItem.jsx"
import { useParams } from "react-router-dom"

const ItemListContainer = ({ greeting }) => {

    const { id } = useParams()

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async function () {
            const request = await fetch(`https://backend-react-production.up.railway.app/api/category/${id||1}`)
            const response = await request.json()
            if (response.success && response.status == 200) {
                setProducts(response.response)
            }
        }
        console.log("fetch data")
        fetchData()
    }, [id])

    return (
        <>
            <p>{greeting}</p>
            <div id="spanFilterContainer">
                <div id="productsContainer">
                    {

                        products.length > 0 ?
                            products.map((item, i) => {
                                return <ProductItem name={item.name} key={i} stock={item.stock} id={item.id} price={item.price - item.discount} imageName={item.image} />
                            })
                        :
                        <p>{"CARGANDO CONTENIDO"}</p>
                    }

                </div>
            </div>
        </>
    )
}

export default ItemListContainer