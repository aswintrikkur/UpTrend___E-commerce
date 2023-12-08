import React, { useState } from "react";
import "./Button.scss";
import { ScaleLoader } from "react-spinners";
import { speechRecog } from "../../utils/speechRecog";

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

//============== Audio Search button =====================
export const AudioSearchBtn = ({ setSearchInput }) => {
	const [isRecording, setIsRecording] = useState(false);

	
	const handleAudioButton = async () => {
		try {
			setIsRecording(true);

			const response = await speechRecog();
			setIsRecording(false);
			response && setSearchInput(response);
		} catch (error) {
			setIsRecording(false);
			error === "not-allowed" && alert("Speech Recognition not supported");
		}
	};

	return (
		<div className="audio-search-btn-container">
			<button id="voice-btn" className="voice-btn" onClick={handleAudioButton}>
				{isRecording ? (
					<ScaleLoader color="white" height={20} width={2} />
				) : (
					<img src="icons/Voice.svg" alt="" />
				)}
			</button>
		</div>
	);
};
