import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const { id } = useParams()
    const [product, setProduct] = useState([])

    useEffect(() => {
        const fetchData = async function () {
            const request = await fetch(`https://backend-react-production.up.railway.app/api/products/${id}`)
            const response = await request.json()
            if (response.success && response.status == 200) {
                setProduct(response.response)
            }
        }
        fetchData()
    }, [id])
    return (
        <div>
            <p>{"nombre del producto: " + product.name}</p>
            <p>{"precio del producto: " + (product.price - product.discount)}</p>
            <p>{"id del producto:" + (product.id)}</p>
            <p>{product.stock>0 ? "Este producto cuenta con stock disponible" : "Product sin stock disponible por el momento"}</p>
        </div>
    )
}

export default ItemDetailContainer