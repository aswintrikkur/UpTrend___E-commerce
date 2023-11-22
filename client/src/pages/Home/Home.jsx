import React, { useContext, useEffect, useRef, useState } from "react";
import "./Home.scss";
import { Container } from "../../components/container/Container";
import { FloatButton } from "../../components/buttons/Button";
import ReactSwitch from "react-switch";
import { ModeContext } from "../../context/ModeContext";
import axios from "axios";
import { API_URL } from "../../api";
import { useNavigate } from "react-router-dom";
import { handleAddToWishList } from "../../utils";
import { ProductCard } from "../../components/card/Card";

export const Home = () => {
	const [user, setUser] = useState("");
	const [productList, setProductList] = useState([]);
	const { btnChecked, handleMode } = useContext(ModeContext);
	const [searchProductList, setSearchProductList] = useState("");
	const targetRef = useRef(null);

	const navigate = useNavigate();

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
		const response = await axios(`${API_URL}/api/ProductList`);
		setProductList(response.data);
	};

	const handleSearchProductList = (event) => {
		setSearchProductList(event.target.value);
		console.log(searchProductList);
	};

	const fetchSearchProductList = async () => {
		try {
			const response = await axios(`${API_URL}/api/searchProductList`, {
				method: "GET",
				params: {
					value: searchProductList,
				},
			});
			setProductList(response.data);
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	};

	//----- search field debouncing -------
	useEffect(() => {
		const timer = setTimeout(() => {
			fetchSearchProductList();
		}, 500);

		return () => {
			clearTimeout(timer);
		};
	}, [searchProductList]);

	useEffect(() => {
		fetchUserFromLocalStorage();
		fetchProductList();
	}, []);

	//------ handle sticky ------
	useEffect(() => {
		const observer = new IntersectionObserver(
		  ([entry]) => {
			const { target, isIntersecting } = entry;
			if (!isIntersecting) {
			  target.classList.add('is-sticky');
			  console.log(isIntersecting,'isIntersecting');
			} else {
				target.classList.remove('is-sticky');
				console.log(isIntersecting,'isIntersecting');
			}
		  },
		  { threshold: 0 }
		);
		if (targetRef.current) {
		  observer.observe(targetRef.current);
		}
		return () => observer.disconnect(); // Clean up the observer on component unmount
	  }, []);
	

	return (
		<Container showHeader={true}>
			{/* <div className="float-btn-top">
				<FloatButton icon="icons/menu.svg" />
				<FloatButton icon="icons/Bag.svg" />
			</div> */}
			{/* <ReactSwitch
				className="toggle-switch tgl-btn"
				checked={btnChecked}
				onChange={handleMode}
				uncheckedIcon={<i className="fa-solid fa-sun" style={{ color: "white" }}></i>}
				checkedIcon={<i className="fa-solid fa-moon" style={{ color: "black" }}></i>}
			/> */}

			<div className="home-container">
				<h2>{user}</h2>
				<span>Welcome to UpTrend</span>
				<div className="search-bar" ref={targetRef}>
					<img src="icons/Search.svg" className="search-icon" alt="" />{" "}
					<input className="search-input" placeholder="Search..." onChange={handleSearchProductList} type="text" />
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
						{productList.map((data, index) => {
							return (
								<div className="content" key={index}>
									{/* <h4> Adidas</h4> */}
									<h4>{data?.brand}</h4>
								</div>
							);
						})}
						{/* <div className="content">
							<h4>Nike</h4>
						</div>
						<div className="content">
							<h4>Fila</h4>
						</div> */}
					</div>
				</div>
				<div className="new-arraival common-div">
					<div className="title">
						<h3 className="b1 ">New Arraival</h3>
						<p className="b3 ">View All</p>
					</div>

					<div className="card-container" /* product List  */>
						{productList?.map((data) => (
							<ProductCard data={data} key={data.id} />
						))}
					</div>
				</div>
			</div>
		</Container>
	);
};
