import React from "react";
import "./Button.scss";

export const FloatButton = ({ onClick, icon }) => {
	return (
		<div className="float-btn-container" onClick={onClick}>
			<img className="btn float-btn" src={icon} alt="<" />
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

export const CartButton = ({ text, icon, onClick }) => {
	return (
		<div className="cart-btn-container">
			<button className="cart-btn" onClick={onClick}>
				{text}
				{icon}
			</button>
		</div>
	);
};
