import { useState } from "react";
import "./App.css";
import { Accounts } from "./pages/Accounts/Accounts";
import { Intro } from "./pages/Intro/Intro";
import { SignUp } from "./pages/Signup/SignUp";
import { Home } from "./pages/Home/Home";

function App() {
	const [mode, setMode] = useState("light");

	const handleMode = () => {
		setMode((prev) => (prev === "light" ? "dark" : "light"));
	};

	return (
		<div div className="app-container" id={mode}>
			<Intro handleMode={handleMode} />
			<Accounts />
			<SignUp/>
			<Home/>
		</div>
	);
}

export default App;
