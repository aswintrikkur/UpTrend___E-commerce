import { createContext, useState } from "react";

export const ModeContext = createContext();

export const ModeProvider = ({ children }) => {
	const [mode, setMode] = useState("light");
	const [btnChecked, setBtnChecked] = useState(false);

	const handleMode = () => {
		setMode((prev) => (prev === "light" ? "dark" : "light"));
		setBtnChecked((prev) => !prev);
	};

	return (<ModeContext.Provider value={{ mode, btnChecked, handleMode }}>{children}</ModeContext.Provider>);
};
