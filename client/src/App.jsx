import "./App.css";
import { Accounts } from "./pages/Accounts/Accounts";
import { Intro } from "./pages/Intro/Intro";
import { SignUp } from "./pages/Signup/SignUp";
import { Home } from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import { Error } from "./pages/Error/Error";
import { useContext } from "react";
import { ModeContext } from "./context/ModeContext";

function App() {
	const { mode } = useContext(ModeContext);

	return (
		<div div className="app-container" id={mode}>
			<Routes>
				<Route path="/" element={<Intro />} />
				<Route path="/accounts" element={<Accounts />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/home" element={<Home />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</div>
	);
}

export default App;
