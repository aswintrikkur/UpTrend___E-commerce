import React, { useContext } from "react";
import "./Menu.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../redux/features/menuSlice";
import ReactSwitch from "react-switch";
import { ModeContext } from "../../context/ModeContext";

export const Menu = () => {
	const { btnChecked, handleMode } = useContext(ModeContext);
	const {showMenu } = useSelector((state) => state.menu);
	const dispatch = useDispatch();

	const user = JSON.parse(localStorage.getItem("user"))?.userName || "Unknown";

	return (
		<>
			<div
				className="bg-blur"
				onClick={() => {
					dispatch(toggleMenu());
				}}
			></div>
			<div className="menu-container">
				<div className="profile">
					<i className="fa-solid fa-circle-user fa-xl"></i>
					<h3>{user} </h3>
					{/* <p>Verified Proile</p> */}
					{/* <p> orders</p> */}
				</div>

				<ul>
					<li>
						Dark Mode
						<span>
							<ReactSwitch
								className="toggle-switch"
								checked={btnChecked}
								onChange={handleMode}
								uncheckedIcon={<i className="fa-solid fa-sun " style={{ color: "white" }}></i>}
								checkedIcon={<i className="fa-solid fa-moon " style={{ color: "black" }}></i>}
							/>
						</span>
					</li>
					<li>Account Infomation</li>
					<li>Password</li>
					<li>Orders</li>
					<li>My Cards</li>
					<li>Wishlist</li>
					<li>settings</li>
				</ul>
				<div className="log-out">
					<p>
						Logout{" "}
						<span>
							<i className="fa-solid fa-right-from-bracket fa-lg"></i>
						</span>{" "}
					</p>
				</div>
			</div>
		</>
	);
};
