import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import { Container } from "../../components/container/Container";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../api";
import { handleAddToWishList } from "../../utils";
import { FloatButton } from "../../components/buttons/Button";

export const ProductDetails = () => {
	const [productDetails, setProductDetails] = useState({});
	const params = useParams();
	const navigate = useNavigate();
	const [selected, setSelected] = useState(false);
	const [count, setCount] = useState(0);

	const fetchProductDetails = async (id) => {
		try {
			const response = await axios(`${API_URL}/api/productDetails`, {
				method: "GET",
				params: {
					id,
				},
			});
			setProductDetails(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	const handleSizeSelection = (event) => {
		setSelected((prev) => !prev);
		event.currentTarget.style.border = selected ? "1px solid black" : "solid 1px rgba(128, 128, 128, 0.295)";
	};

	const handleCountIncrement = () => {
		setCount((prev) => prev + 1);
	};
	const handleCountDecrement = () => {
		setCount((prev) => prev - 1);
	};

	useEffect(() => {
		fetchProductDetails(params.id);
	}, []);

	return (
		<Container>
			<div className="product-details-container">
				<FloatButton onClick={() => navigate(-1)} icon="/icons/Arrow - Left.svg" />
				<div className="product">
					<p className="brand">{productDetails.brand}</p>
					<p className="title">{productDetails.title}</p>
					<div className="product-img-container">
						<img className="product-img" src={productDetails.image} alt={"product id:" + params.id} />
					</div>
					<i className="fa-regular fa-heart" onClick={handleAddToWishList}></i>
					<p className="price">{productDetails.price} ₹</p>
					<div className="count-selector">
						<button className="count-btn" onClick={handleCountDecrement}>
							{" "}
							-{" "}
						</button>
						<p className="count"> {count} </p>
						<button className="count-btn" onClick={handleCountIncrement}>
							{" "}
							+{" "}
						</button>
					</div>
					<div className="size-container">
						<p className="b1">size</p>
						<div>
							{productDetails.size?.map((data) => (
								<button className="size" onClick={handleSizeSelection}>
									{" "}
									{data}
								</button>
							))}
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};
