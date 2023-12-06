import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ConvertPrice } from '../scripts/functions'

const backend_url = "https://backend-react-production.up.railway.app"

const ItemDetailContainer = () => {

    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [amount, setAmount] = useState(1)

    const amountFunction = (add) => {
        // Se tomara el valor entre 1 y 10
        setAmount(Math.min(10, Math.max(1, amount + add)))
    }

    useEffect(() => {
        const fetchData = async function () {
            const request = await fetch(`${backend_url}/api/products/${id}`)
            const response = await request.json()
            if (response.success && response.status == 200) {
                setProduct(response.response)
            }
        }
        fetchData()
    }, [id])

    return (
        <>
            {
                product.name ?
                    <span class="itemDetailContainer">
                        <div className="holder">
                            <img srcSet={`${backend_url}/images/${product.image}`} alt="" className="itemDetailImage" />
                        </div>
                        <div className="holder detailInfoContainer">
                            <h2 className="itemDetailTitle">{product.name}</h2>
                            <p className="itemDetailDescription">{product.description || ""}</p>
                            <p className="itemDetailStockType">{product.stock > 0 ? "Stock disponible" : "Sin stock disponible"}</p>
                            <p className="itemDetailProductPrice">{ConvertPrice(product.price - product.discount, ".")}</p>
                            <span>
                                <div>
                                    <button type="button" className="inputDetailButton detailButtonRemove" onClick={() => amountFunction(-1)}>{"-"}</button>
                                    <input type="text" name="" id="" className="itemDetailInputText" value={amount} />
                                    <button type="button" className="inputDetailButton detailButtonAdd" onClick={() => amountFunction(1)}>{"+"}</button>
                                </div>
                                <button type="button" class="itemDetailAddToCart">
                                    <p>{"Agregar al carrito"}</p>
                                </button>
                                
                            </span>
                        </div>
                    </span>
                    :
                    <div></div>
            }
        </>
    )
}

export default ItemDetailContainer