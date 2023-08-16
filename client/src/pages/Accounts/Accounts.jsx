import React, { useContext } from "react";
import "./Accounts.css";
import { Container } from "../../components/container/Container";
import { AccountButton, FloatButton, LargeButton } from "../../components/buttons/Button";
import { useNavigate } from "react-router-dom";
import ReactSwitch from "react-switch";
import { ModeContext } from "../../context/ModeContext";

export const Accounts = () => {

	const navigate =useNavigate();
	const { btnChecked, handleMode } = useContext(ModeContext);
	
	return (
		<Container>
			<div className="accounts-container">
				<FloatButton onClick={()=>navigate(-1)} icon='icons/Arrow - Left.svg' />
				<ReactSwitch
					className="toggle-switch"
					checked={btnChecked}
					onChange={handleMode}
					uncheckedIcon={<i className="fa-solid fa-sun" style={{ color: "white" }}></i>}
					checkedIcon={<i className="fa-solid fa-moon" style={{ color: "black" }}></i>}
				/>

				<h2>Let’s Get Started</h2>
				<div className="buttons">
					<AccountButton text="Facebook" color="#4267B2" />
					<AccountButton text="Twitter" color="#1DA1F2" />
					<AccountButton text="Google" color="#EA4335" />
				</div>
				<p>Already have an account? <span>Signin</span></p>
				<LargeButton className='large-button' onClick={()=>navigate('/signup')  } text='Create an Account' />
			</div>
		</Container>
	);
};
