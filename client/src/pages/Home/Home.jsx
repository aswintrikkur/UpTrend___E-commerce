import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import { Container } from "../../components/container/Container";
import { FloatButton } from "../../components/buttons/Button";
import ReactSwitch from "react-switch";
import { ModeContext } from "../../context/ModeContext";
import axios from "axios";

export const Home = () => {
	const [user, setUser] = useState("");
	const [productList, setProductList] = useState([]);

	const { btnChecked, handleMode } = useContext(ModeContext);

	const userNameModify = (name) => {
		const newName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
		return newName;
	};

	const fetchUserFromLocalStorage = () => {
		let userData = JSON.parse(localStorage.getItem("user"))?.userName;
		if (userData == "" || !userData) {
			return setUser("Unknown");
		}
		const name = userNameModify(userData);
		setUser(name);
	};

	const fetchProductList = async () => {
		const response = await axios("http://localhost:3000/api/productList");
		setProductList(response.data);
	};

	useEffect(() => {
		fetchUserFromLocalStorage();
		fetchProductList();
	}, []);

	return (
		<Container>
			<div className="float-btn-top">
				<FloatButton icon="icons/menu.svg" />
				<FloatButton icon="icons/Bag.svg" />
			</div>
			<ReactSwitch
				className="toggle-switch tgl-btn"
				checked={btnChecked}
				onChange={handleMode}
				uncheckedIcon={<i className="fa-solid fa-sun" style={{ color: "white" }}></i>}
				checkedIcon={<i className="fa-solid fa-moon" style={{ color: "black" }}></i>}
			/>

			<div className="home-container">
				<h2>{user}</h2>
				<span>Welcome to UpTrend</span>
				<div className="search-bar">
					<img src="icons/Search.svg" className="search-icon" alt="" />
					<input className="search-input" placeholder="Search..." type="text" />
					<button className="voice-btn">
						<img src="icons/Voice.svg" alt="" />
					</button>
				</div>
				<div className="choose-brand common-div">
					<div className="title">
						<h3 className="b1 ">Choose Brand</h3>
						<p className="b3 ">View All</p>
					</div>
					<div className="content-container">
						<div className="content">
							<h4> Adidas</h4>
						</div>
						<div className="content">
							<h4>Nike</h4>
						</div>
						<div className="content">
							<h4>Fila</h4>
						</div>
					</div>
				</div>
				<div className="new-arraival common-div">
					<div className="title">
						<h3 className="b1 ">New Arraival</h3>
						<p className="b3 ">View All</p>
					</div>
					<div className="card-container">
						{productList.map((data) => {
							/* product List  */
							return (
								<div className="card">
									<img className="product-img" src={data.image} alt="product1" />
									<i className="fa-regular fa-heart"></i>
									<p className="b4 item">
										{data.brand} 
									</p>
									<p className="b4  title">{data.title}</p>
									<p className="price b4">{data.price} ₹</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</Container>
	);
};
