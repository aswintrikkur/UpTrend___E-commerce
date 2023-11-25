import React from "react";
import "./Card.scss";
import { handleAddToWishList } from "../../utils";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({ data }) => {
	const navigate = useNavigate();

	return (
		<div className="card">
			<div className="img-container" onClick={() => navigate(`/productDetails/${data.id}`)}>
				<img className="product-img" src={data.image} alt="product1" />
			</div>
			<i className="fa-regular fa-heart"  onClick={handleAddToWishList} ></i>
			<div className="text-container">
				<p className="b4 brand">{data.brand}</p>
				<p className="b4  title">{data.title}</p>
				<p className="price b4">{data.price} ₹</p>
			</div>
		</div>
	);
};
