import React from "react";
import "./Menu.scss";
import useMenu from "../../hooks/useMenu";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../redux/menu";

export const Menu = () => {

    // const {showMenu}= useMenu();

	const {showMenu} = useSelector(state=>state.menu)
	const dispatch = useDispatch();


	return (
		<>
		<div className="bg-blur" onClick={()=>{dispatch(toggleMenu())}} ></div>
		<div className="menu-container">
			<div className="profile">
				<img src="" alt="profile_pic" />
				<>
					<h4>name</h4>
					<p>Verified Proile</p>
					<p> orders</p>
				</>
			</div>

			<ul>
				<li>Dark Mode</li>
				<li>Account Infomation</li>
				<li>Password</li>
				<li>Orders</li>
				<li>My Cards</li>
				<li>Wishlist</li>
				<li>settings</li>
			</ul>
			<div className="log-out">
				<p>Logout</p>
			</div>
		</div>
		</>
	);
};
