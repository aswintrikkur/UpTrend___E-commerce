import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/global.css";
import { BrowserRouter } from "react-router-dom";
import { ModeProvider } from "./context/ModeContext.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
	<ModeProvider>
		<BrowserRouter>
			 <Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</ModeProvider>
);
