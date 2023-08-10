import React from "react";
import "./Button.css";

export const FloatButton = ({icon}) => {
	return (
		<div className="float-btn-container">
			<img className="btn float-btn" src={icon} alt="" />
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
