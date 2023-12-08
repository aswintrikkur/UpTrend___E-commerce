import React from "react";
import "./Container.css";
import { NotificationBar } from "../notification_bar/NotificationBar";
import { Header } from "../header/Header";
import { Menu } from "../menu/Menu";
import { useSelector } from "react-redux";

export const Container = ({ showHeader = false, children }) => {
	const { showMenu } = useSelector((state) => state.menu);

	return (
		<div id="global-container">
			{showHeader && <Header />}
			{showHeader && showMenu && <Menu />}
			{/* <NotificationBar /> */}
			{children}
		</div>
	);
};
