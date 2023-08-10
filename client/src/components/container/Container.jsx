import React from "react";
import "./Container.css";
import { NotificationBar } from "../notification_bar/NotificationBar";

export const Container = ({ children }) => {
	return (
		<div id="global-container" >
			{/* <NotificationBar /> */}
			{children}
		</div>
	);
};
