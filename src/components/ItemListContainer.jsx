import React, { useEffect, useState } from "react"
import ItemList from "./ItemList.jsx"
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore } from "firebase/firestore"

const ItemListContainer = ({ greeting }) => {

	const { id } = useParams()

	const [products, setProducts] = useState([])

	useEffect(() => {
		const db = getFirestore()
		const productsCollection = collection(db, "productos")

		getDocs(productsCollection).then(snapshot => {
			setProducts(snapshot.docs.map(doc => {
				return {
					id: doc.id,
					...doc.data()
				}
			}))
		})
	}, [])

	return (
		<>
			<p>{greeting}</p>
			<div id="spanFilterContainer">
				<div id="productsContainer">
					{
						products.length > 0 ?
							products.map((item, i) => {
								return <ItemList name={item.name} key={i} stock={item.stock} id={item.id} price={item.price - item.discount} imageName={item.image} />
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