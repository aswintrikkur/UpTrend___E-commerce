import React, { useEffect, useState } from "react";
import "./Home.css";
import { Container } from "../../components/container/Container";
import { FloatButton } from "../../components/buttons/Button";
import ReactSwitch from "react-switch";

export const Home = ({handleMode}) => {
	const [user, setUser] = useState("");
	const [check, setCheck] = useState(false);

	const handleChange = () => {
		handleMode();
		setCheck((prev) => !prev);
	};

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

	useEffect(() => {
		fetchUserFromLocalStorage();
	}, []);

	return (
		<Container>
			<div className="float-btn-top">
				<FloatButton icon="icons/menu.svg" />
				<FloatButton icon="icons/Bag.svg" />
			</div>
			<ReactSwitch
				className="toggle-switch tgl-btn"
				checked={check}
				onChange={handleChange}
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
						<div className="card">
							<img className="product-img" src="products/product2.png" alt="" />
							<i className="fa-regular fa-heart"></i>
							<pre className="b4 item">
								Nike Sportswear <br />
								Club Fleece
							</pre>
							<p className="price b3">$99</p>
						</div>
						<div className="card">
							<img className="product-img" src="products/product1.png" alt="" />
							<i className="fa-solid fa-heart" style={{ color: "#d9202a" }}></i>
							<pre className="b4 item">
								Nike Sportswear <br />
								Club Fleece
							</pre>
							<p className="price b3">$99</p>
						</div>
						<div className="card">
							<img className="product-img" src="products/product3.png" alt="" />
							<i className="fa-regular fa-heart"></i>
							<pre className="b4 item">
								Nike Sportswear <br />
								Club Fleece
							</pre>
							<p className="price b3">$99</p>
						</div>
						<div className="card">
							<img className="product-img" src="products/product4.png" alt="" />
							<i className="fa-regular fa-heart"></i>
							<pre className="b4 item">
								Nike Sportswear <br />
								Club Fleece
							</pre>
							<p className="price b3">$99</p>
						</div>
						<div className="card">
							<img className="product-img" src="products/product1.png" alt="" />
							<i className="fa-regular fa-heart"></i>
							<pre className="b4 item">
								Nike Sportswear <br />
								Club Fleece
							</pre>
							<p className="price b3">$99</p>
						</div>
						<div className="card">
							<img className="product-img" src="products/product2.png" alt="" />
							<i className="fa-regular fa-heart"></i>
							<pre className="b4 item">
								Nike Sportswear <br />
								Club Fleece
							</pre>
							<p className="price b3">$99</p>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};
