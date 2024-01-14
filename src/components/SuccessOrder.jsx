import React from 'react'
import { useSearchParams } from 'react-router-dom'

const SuccessOrder = () => {

	const [searchParams, setSearchParams] = useSearchParams();
	const name = searchParams.get("name")
	const document = searchParams.get("document")
	const mail = searchParams.get("mail")
	const province = searchParams.get("province")
	const cp = searchParams.get("cp")
	const address = searchParams.get("address")

	console.log("Nombre: ", name)
	console.log("Documento: ", document)
	console.log("Email: ", mail)
	console.log("Provincia: ", province)
	console.log("Codigo postal: ", cp)
	console.log("Direccion: ", address)
	
	return (
		<>
			<h3>Desde aca la pagina deberia mandarte a pagar con los datos de envio que rellenaste antes</h3>
			<h4>{"Pero aca me quede (pd: desde la consola podes ver los datos de envio)"}</h4>
		</>
	)
}

export default SuccessOrder