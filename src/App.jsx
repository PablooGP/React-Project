import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx"
import ItemDetailContainer from "./components/ItemDetailContainer.jsx"
import CartProvider from "./components/CartContext.jsx";
import Checkout from "./components/Checkout.jsx"
import Brief from "./components/Brief.jsx"

function App() {
	return (
		<BrowserRouter>
			<CartProvider>
				<Navbar />
				<Routes>
					<Route exact path="/" element={<ItemListContainer greeting="Toda la lista de productos" />}></Route>
					<Route exact path="/category/:id" element={<ItemListContainer greeting="Lista de productos por categoria" />}></Route>
					<Route exact path="/item/:id" element={<ItemDetailContainer></ItemDetailContainer>}></Route>
					<Route exact path="/checkout" element={<Checkout/>}/>
					<Route exact path="/brief" element={<Brief/>}/>
				</Routes>
			</CartProvider>
		</BrowserRouter>
	);
}

export default App;
