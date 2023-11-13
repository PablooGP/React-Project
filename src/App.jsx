import { useState } from "react";

import Navbar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx"

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Navbar/>
			<ItemListContainer greeting="Lista de Productos: (Comision 49895)"/>
		</>
	);
}


export default App;
