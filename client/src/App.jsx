import { useState } from "react";
import "./App.css";
import { Accounts } from "./pages/Accounts/Accounts";
import { Intro } from "./pages/Intro/Intro";
import { SignUp } from "./pages/Signup/SignUp";
import { Home } from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import { Error } from "./pages/Error/Error";

function App() {
	const [mode, setMode] = useState("light");

	const handleMode = () => {
		setMode((prev) => (prev === "light" ? "dark" : "light"));
	};

	return (
		<div div className="app-container" id={mode}>

			<Routes>
				<Route path="/" element={<Intro handleMode={handleMode} />} />
				<Route path="/accounts" element={<Accounts />} />
				<Route path="/signup"  element={<SignUp/>}/>
				<Route path="/home"  element={<Home handleMode={handleMode}/>}/>
				<Route path="*"  element={<Error/>}/>
			</Routes>
			
		</div>
	);
}

export default App;
