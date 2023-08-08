import React, { useEffect, useState } from "react";
import "./NotificationBar.css";

export const NotificationBar = () => {
	const [time, setTime] = useState('12:00 AM');

	const getTime = () => {
		const time = new Date().toTimeString();		
		const timeNow = time.slice(0,5);
		setTime(timeNow);
	};
	
	useEffect(() => {
	  getTime();
	}, [])
	
	setInterval(() => {
	  getTime();
	}, 30000)


	return (
		<div className="notification-container">
			<p>{time}</p>
			<div className="mob-signal">
				<img src="icons/Wifi.svg" alt="wifi" />
				<img src="icons/Mobile Signal.svg" alt="mob" />
				<img src="icons/Battery.svg" alt="battery" />
			</div>
		</div>
	);
};
