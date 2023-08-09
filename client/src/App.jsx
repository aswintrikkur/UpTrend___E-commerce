import { useState } from "react";
import "./App.css";
import { Accounts } from "./pages/Accounts/Accounts";
import { Intro } from "./pages/Intro/Intro";

function App() {
	const [mode, setMode] = useState("light");

	const handleMode = () => {
		setMode((prev) => (prev === "light" ? "dark" : "light"));
	};

	return (
		<div div className="app-container" id={mode}>
			<Intro handleMode={handleMode} />
			<Accounts />
		</div>
	);
}

export default App;
