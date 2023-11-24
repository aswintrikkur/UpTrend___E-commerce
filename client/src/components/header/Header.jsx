import React, { useRef } from "react";
import "./Header.scss";
import { FloatButton } from "../buttons/Button";
import useMenu from "../../hooks/useMenu";
import { useDispatch, useSelector } from "react-redux";
import {  toggleMenu } from "../../redux/menu";

export const Header = () => {
	// const { handleMenu, menu, setShowMenu } = useMenu();
	const menuIcon = useRef();

	//===== redux =========
	const { showMenu } = useSelector((state) => state.menu);
	const dispatch = useDispatch();

	// const animateMenu = () => {
	// 	menuIcon.current.style.transition = ".5s";

	// 	if (!showMenu) {
	// 		// menuIcon.current.style.backgroundColor = "rgba(150, 117, 250, 0.623)";
	// 		menuIcon.current.style.rotate = "90deg";
	// 	} else {
	// 		menuIcon.current.style.rotate = "0deg";
	// 	}
	// };

	return (
		<>
			<button
				className="menu"
				ref={menuIcon}
				onClick={() => {
					dispatch(toggleMenu(menuIcon)); //! can't assign single method on different button
					// animateMenu();
				}}
			>
				<img
					// ref={menu}
					src="icons/menu.svg"
					name="menu"
					alt="menu"
				/>
			</button>

			<div
				className="header-container "
				name="header"
				onClick={(e) => {
					// dispatch(closeMenu()) //! can't assign single method on different button
				}}
			>
				<div className="logo">
					<img src="images/logo_big.png" alt="" />
					{/* <img src="logo/UpTrend_logo.svg" alt="" /> */}
				</div>
				<h2>UPTREND</h2>

				<div className="nav">
					<i className="fa-regular fa-heart fa-xl" style={{ color: "#ffffff" }}></i>
					<i className="fa-solid fa-cart-shopping fa-xl" style={{ color: "#ffffff" }}></i>
					{/* <i className="fa-solid fa-right-from-bracket fa-xl" style={{ color: "#ffffff" }}></i> */}
					{/* <p>WISHLIST</p> */}
					{/* <p>CART</p> */}
					{/* <p>LOG OUT</p> */}
				</div>
			</div>
		</>
	);
};
