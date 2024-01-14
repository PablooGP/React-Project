import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { doc, getDoc, getFirestore } from "firebase/firestore"
import { ItemDetail, ItemQuantitySelector } from './ItemDetail.jsx'

const ItemDetailContainer = () => {

	const { id } = useParams()
	const [product, setProduct] = useState({})

	useEffect(() => {
		const db = getFirestore()
		const ref = doc(db, "productos", id)
		getDoc(ref).then(snapshot => {
			if (snapshot.exists()) {
				setProduct({ id: snapshot.id, ...snapshot.data() })
			}
		})
	}, [id])

	return (
		<>
			{
				product.name ?
					<ItemDetail product={product}/>
					:
					<div>Cargando informacion del producto...</div>
			}
		</>
	)
}

export default ItemDetailContainer