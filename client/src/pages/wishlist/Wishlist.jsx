import React from "react";
import { Container } from "../../components/container/Container";
import { ProductCard } from "../../components/card/Card";
import "./Wishlist.scss";

export const Wishlist = () => {
	return (
		<Container showHeader>
			<div className="wishlist-container">
				<h1>WISHLIST</h1>
				<img
					src="https://cdn.vectorstock.com/i/1000x1000/33/07/website-maintenance-abstract-concept-vector-38343307.webp"
					alt="maintenace"
				/>
			</div>
		</Container>
	);
};
