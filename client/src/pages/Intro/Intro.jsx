import React, { useEffect } from "react";
import "./Intro.css";
import ReactSwitch from "react-switch";
import { LargeButton } from "../../components/buttons/Button";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

export const Intro = () => {

	const navigate = useNavigate();

	useEffect(() => {

		setTimeout(() => {
			navigate("/accounts");
		}, 2000);

	}, []);

	return (
		<div className="intro-container">
			{/* <NotificationBar /> */}
			<div className="UpTrend">
				<img src="images/logo_big.png" className="logo" alt="logo" />
				<h1>UpTrend</h1>
				<h2>Find Your Slyle</h2>
				{/* <ReactSwitch
					className="toggle-switch"
					checked={btnChecked}
					onChange={handleMode}
					uncheckedIcon={<i className="fa-solid fa-sun" style={{ color: "white" }}></i>}
					checkedIcon={<i className="fa-solid fa-moon" style={{ color: "black" }}></i>}
				/> */}
			</div>
			{/* <div style={{ border: "1px soid black" }}>
				<LargeButton onClick={() => navigate("/accounts")} text="Explore" />
			</div> */}
		</div>
	);
};
