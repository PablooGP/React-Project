import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";

import { initializeApp } from "firebase/app"

initializeApp({
	apiKey: "AIzaSyCYl_EC2irKYiYZz-U5SfUSKPCF43MnlnE",
	authDomain: "afk-database.firebaseapp.com",
	databaseURL: "https://afk-database.firebaseio.com",
	projectId: "afk-database",
	storageBucket: "afk-database.appspot.com",
	messagingSenderId: "464213288057",
	appId: "1:464213288057:web:f301fb027be9523fa7a0a8",
	measurementId: "G-3VFEZV9DL7"
})

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
