import React from "react";
import { ClipLoader } from "react-spinners";

export const ProductCardLoader = () => {
	const data = [
		{ image: "https://img.freepik.com/premium-vector/men-boys-wear-boxy-t-shirt-vector_529003-228.jpg" },
	];

	return (
		<div
			style={{ backgroundColor: "", width: "100vw", height: "300px", paddingTop: "130px", textAlign: "center" }}
		>
			<h3>Fetching Products....</h3>
			<ClipLoader color="#63706d" size={40} speedMultiplier={1.3} />
		</div>
	);
};
