import React, { useState } from "react";
import "./Intro.css";
import { Container } from "../../components/container/Container";
import { NotificationBar } from "../../components/notification_bar/NotificationBar";
import ReactSwitch from "react-switch";
import { LargeButton } from "../../components/buttons/Button";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ModeContext } from "../../context/ModeContext";

export const Intro = () => {
	const { mode, btnChecked, handleMode } = useContext(ModeContext);

	const navigate = useNavigate();

	return (
		<div className="intro-container">
			{/* <NotificationBar /> */}
			<div className="UpTrend">
				<img src="images/logo_big.png" alt="logo" />
				<h1>UpTrend</h1>
				<h2>Find Your Slyle</h2>
				<ReactSwitch className="toggle-switch"
					checked={btnChecked}
					onChange={handleMode}
					uncheckedIcon={<i className="fa-solid fa-sun" style={{ color: "white" }}></i>}
					checkedIcon={<i className="fa-solid fa-moon" style={{ color: "black" }}></i>}
				/>
			</div>
			<div style={{ border: "1px soid black" }}>
				<LargeButton onClick={() => navigate("/accounts")} text="Explore" />
			</div>
		</div>
	);
};
