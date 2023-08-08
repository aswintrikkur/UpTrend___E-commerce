import React from "react";
import "./Intro.css";
import { Container } from "../../components/container/Container";
import { NotificationBar } from "../../components/notification_bar/NotificationBar";

export const Intro = () => {
	return (
		<Container>
			<NotificationBar />
			<div className="intro-container">
				<img src="images/logo_big.png" alt="logo" />
				<h1>UpTrend</h1>
				<h2>Find Your Slyle</h2>
			</div>
		</Container>
	);
};
