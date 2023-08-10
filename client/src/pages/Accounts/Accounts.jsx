import React from "react";
import "./Accounts.css";
import { Container } from "../../components/container/Container";
import { AccountButton, FloatButton, LargeButton } from "../../components/buttons/Button";

export const Accounts = () => {
	return (
		<Container>
			<div className="accounts-container">
				<FloatButton icon='icons/Arrow - Left.svg' />
				<h2>Let’s Get Started</h2>
				<div className="buttons">
					<AccountButton text="Facebook" color="#4267B2" />
					<AccountButton text="Twitter" color="#1DA1F2" />
					<AccountButton text="Google" color="#EA4335" />
				</div>
				<p>Already have an account? <span>Signin</span></p>
				<LargeButton className='large-button' text='Create an Account' />
			</div>
		</Container>
	);
};
