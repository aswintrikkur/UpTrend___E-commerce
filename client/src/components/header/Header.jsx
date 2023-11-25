import React, { useRef } from "react";
import "./Header.scss";
import { FloatButton } from "../buttons/Button";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../redux/menu";
import { useNavigate } from "react-router-dom";

export const Header = () => {
	const navigate = useNavigate();

	//===== redux =========
	// const { showMenu } = useSelector((state) => state.menu);
	const dispatch = useDispatch();

	return (
		<>
			<button
				id="menu-icon"
				className="menu-icon"
				onClick={() => {
					dispatch(toggleMenu()); //! can't assign single method on different button
					// animateMenu();
				}}
			>
				<img
					// src="icons/menu.svg"
					src="/icons/menu.svg"
					name="menu"
					alt="`menu"
				/>
			</button>

			<div className="header-container " name="header">
				<div className="logo">
					<img src="/images/logo_big.png" alt="" />
					{/* <img src="logo/UpTrend_logo.svg" alt="" /> */}
				</div>
				<h2>UPTREND</h2>

				<div className="nav">
					<i
						className="fa-regular fa-heart fa-xl"
						onClick={() => {
							navigate("/wishlist");
						}}
						style={{ color: "#ffffff" }}
					></i>
					<i
						className="fa-solid fa-cart-shopping fa-xl"
						onClick={() => {
							navigate("/cart");
						}}
						style={{ color: "#ffffff" }}
					></i>

					{/* <p>WISHLIST</p> */}
					{/* <p>CART</p> */}
					{/* <p>LOG OUT</p> */}
				</div>
			</div>
		</>
	);
};
