import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { doc, getDoc, getFirestore } from "firebase/firestore"
import { ItemDetail, ItemQuantitySelector } from './ItemDetail.jsx'

const SelectLabel = ({ values, viewText }) => {
	return (
		<div className="checkoutLabel formularioVertical">
			<label htmlFor={viewText}>{viewText} required</label>
			<select name="province" form="end">
				{
					values.map((element, key) => {
						return (
							<option value={element} key={key}>{element}</option>
						)
					})
				}
			</select>
		</div>
	)
}

const FormLabel = ({ viewText, labelFor }) => {
	return (
		<div className="checkoutLabel formularioVertical">
			<label htmlFor={labelFor}>{viewText}</label>
			<input type="text" name={labelFor} required />
		</div>
	)
}

const ClientData = () => {
	return (
		<>
			<h4 className="midText">Información del Cliente</h4>
			<div className="formularioVertical gap">
				<FormLabel viewText="Nombre Completo:" labelFor="name" />
				<FormLabel viewText="Numero de Documento:" labelFor="document" />
				<FormLabel viewText="Email:" labelFor="mail" />
			</div>
		</>
	)
}

const ClientLocation = () => {
	return (
		<>
			<h4 className="midText">Dirección de Envío</h4>
				<SelectLabel viewText="Provincia:" values={["Buenos Aires", "Catamarca", "Chaco", "Chubut", "Cordoba", "Corrientes", "Entre Rios", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquen", "Rio Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego", "Tucuman"]} />
				<FormLabel viewText="Código Postal:" labelFor="cp" />
				<FormLabel viewText="Dirección:" labelFor="address" />
		</>
	)
}

const ClientProducts = ({ products }) => {
	return (
		<div className="orderMid gap">
			<h4 className="midText">Lista de Productos:</h4>
			{
				products.map((e, key) => {
					return (
						<div key={key} className="briefProduct">
							<img src="" alt="" srcSet={`/images/${e.image}`} />
							<h5>{e.name}</h5>
							<p>{e.units == 1 ? `1 Unidad` : `${e.units} Unidades`}</p>
						</div>
					)
				})
			}
		</div>
	)
}

const Brief = () => {

	const { id } = useParams()
	const [order, setOrder] = useState({})

	useEffect(() => {
		const db = getFirestore()
		const ref = doc(db, "orders", id)
		getDoc(ref).then(snapshot => {
			if (snapshot.exists()) {
				setOrder({ id: snapshot.id, ...snapshot.data() })
			}
		})
	}, [id])

	const endSale = () => {

	}

	return (
		order.products ? <div className="brief">
			<h1 className="midText">Completa los siguientes datos para finalizar con tu pedido</h1>
			<div className="gapdiv"></div>
			<ClientProducts products={order.products} />
			<form action="/successorder" className="gap endForm" id="end">
				<ClientData />
				<ClientLocation />
				<input type="submit" className="endCheckout" value="Finalizar venta"></input>
			</form>
		</div>
		:
		<div>Cargando orden</div>
	)
}

export default Brief