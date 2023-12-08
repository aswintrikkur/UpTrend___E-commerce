import React, { useEffect, useRef, useState } from "react";
import "./Home.scss";
import { Container } from "../../components/container/Container";
import axios from "axios";
import { API_URL } from "../../api";
import { useNavigate } from "react-router-dom";
import { ProductCard } from "../../components/card/Card";
import { speechRecog } from "../../utils/speechRecog";
import { useUser } from "../../hooks/useUser";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/features/productsSlice";
import { ProductCardLoader } from "../../components/loader/productCardLoader/ProductCardLoader";
import { AudioSearchBtn } from "../../components/buttons/Button";
import { SearchInput } from "../../components/searchInput/SearchInput";

export const Home = () => {
	const [user, setUser] = useState("");
	const [productList, setProductList] = useState([]);
	const [searchInput, setSearchInput] = useState("");
	const [isLoading, setIsLoading] = useState(true);

	const { getLocalStorage } = useUser();

	const fetchProductList = async () => {
		try {
			const response = await axios(`${API_URL}/api/ProductList`);
			setProductList(response.data);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	const fetchSearchProductList = async () => {
		try {
			const response = await axios(`${API_URL}/api/searchProductList`, {
				method: "GET",
				params: {
					value: searchInput,
				},
			});
			setProductList(response.data);
			// console.log(response);
		} catch (error) {
			console.log(error);
		}
	};

	//fetch user and productList
	useEffect(() => {
		setUser(getLocalStorage());
		fetchProductList();
	}, []);

	return (
		<Container showHeader>
			<div className="home-container">
				<h2>{user}</h2>
				<span>Welcome to UpTrend</span>
				<div className="search-bar">
					<SearchInput 
						searchInput={searchInput} setSearchInput={setSearchInput}
						fetchSearchProductList={fetchSearchProductList}
					/>
					<AudioSearchBtn setSearchInput={setSearchInput} />
				</div>
				<div className="choose-brand common-div">
					<div className="title">
						<h3 className="b1 ">Choose Brand</h3>
						<p className="b3 ">View All</p>
					</div>
					<div className="content-container">
						{productList?.map((data, index) => {
							return (
								<div className="content" key={index}>
									{/* <h4> Adidas</h4> */}
									<h4>{data?.brand}</h4>
								</div>
							);
						})}
					</div>
				</div>
				<div className="new-arraival common-div">
					<div className="title">
						<h3 className="b1 ">New Arraival</h3>
						{/* <p className="b3 ">View All</p> */}
					</div>

					<div className="card-container" /* product List  */>
						{isLoading ? (
							<ProductCardLoader />
						) : (
							productList?.map((data) => <ProductCard data={data} key={data.id} />)
						)}
					</div>
				</div>
			</div>
		</Container>
	);
};
