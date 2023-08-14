import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/global.css";
import { BrowserRouter } from "react-router-dom";
import { ModeProvider } from "./context/ModeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<ModeProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ModeProvider>
);
