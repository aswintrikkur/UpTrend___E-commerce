import React, { useContext, useState } from "react";
import "./SignUp.css";
import { Container } from "../../components/container/Container";
import { FloatButton, LargeButton } from "../../components/buttons/Button";
import { useNavigate } from "react-router-dom";
import ReactSwitch from "react-switch";
import { ModeContext } from "../../context/ModeContext";

export const SignUp = () => {
	const [field, setField] = useState({
		userName: "",
		password: "",
		email: "",
	});

	const navigate = useNavigate();
	const { btnChecked, handleMode } = useContext(ModeContext);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setField((prev) => ({
			...prev,
			[name]: value,
		}));
	};
	console.log(field);

	const checkContent = (event) => {
		if (event.target.value !== "") {
		}
	};

	const handleUserSignUp = () => {
		localStorage.setItem("user", JSON.stringify(field));
		setField({ userName: "", password: "", email: "" });
		console.log("User Signed Up");
	};

	return (
		<Container>
			<div className="SignUp-container">
				<FloatButton onClick={() => navigate(-1)} icon="icons/Arrow - Left.svg" />
				<ReactSwitch
					className="toggle-switch"
					checked={btnChecked}
					onChange={handleMode}
					uncheckedIcon={<i className="fa-solid fa-sun" style={{ color: "white" }}></i>}
					checkedIcon={<i className="fa-solid fa-moon" style={{ color: "black" }}></i>}
				/>

				<h2>Sign Up</h2>
				<form action="" className="form-container">
					<div className="field" onClick={checkContent}>
						<input id="user-name" value={field.userName} name="userName" type="text" onChange={handleChange} />
						<label htmlFor="user-name">User Name</label>
					</div>

					<div className="field">
						<input id="password" value={field.password} name="password" type="password" onChange={handleChange} />
						<label htmlFor="password">Password</label>
					</div>

					<div className="field">
						<input id="email" value={field.email} name="email" type="email" onChange={handleChange} />
						<label htmlFor="email">Email</label>
					</div>
				</form>
				<LargeButton text="Sign Up" onClick={() => (handleUserSignUp(), navigate("/home"))} />
			</div>
		</Container>
	);
};
