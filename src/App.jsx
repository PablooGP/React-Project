import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx"
import ItemDetailContainer from "./components/ItemDetailContainer.jsx"

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<ItemListContainer greeting="Toda la lista de productos" />}></Route>
				<Route exact path="/category/:id" element={<ItemListContainer greeting="Lista de productos por categoria" />}></Route>
				<Route exact path="/item/:id" element={<ItemDetailContainer></ItemDetailContainer>}></Route>
			</Routes>
		</BrowserRouter>

	);
}


export default App;
