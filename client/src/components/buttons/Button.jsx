import React from "react";
import "./Button.css";

export const BackButton = () => {
	return (
		<div className="back-btn-container">
			<img className="btn back-btn" src="icons/Arrow - Left.svg" alt="" />
		</div>
	);
};

export const AccountButton = ({ text, color }) => {
	return (
		<div className="account-btn-container">
			<button className="account-btn" style={{ backgroundColor: color }}>
				{text}
			</button>
		</div>
	);
};

export const LargeButton = ({ text, onClick }) => {
	return (
		<div className="large-btn-container">
			<button className="large-btn" onClick={onClick}>
				{text}
			</button>
		</div>
	);
};
