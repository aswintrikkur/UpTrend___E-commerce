import React from "react";
import "./Accounts.css";
import { Container } from "../../components/container/Container";
import { AccountButton, FloatButton, LargeButton } from "../../components/buttons/Button";
import { useNavigate } from "react-router-dom";

export const Accounts = () => {

	const navigate =useNavigate();

	return (
		<Container>
			<div className="accounts-container">
				<FloatButton onClick={()=>navigate(-1)} icon='icons/Arrow - Left.svg' />
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
