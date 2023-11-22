import React from "react";
import "./Container.css";
import { NotificationBar } from "../notification_bar/NotificationBar";
import { Header } from "../header/Header";

export const Container = ({ showHeader , children }) => {
	return (
		<div id="global-container">
			{showHeader && <Header />}
			{/* <NotificationBar /> */}
			{children}
		</div>
	);
};
