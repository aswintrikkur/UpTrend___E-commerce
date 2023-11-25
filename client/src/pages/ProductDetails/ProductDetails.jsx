import React, { useEffect, useState } from "react";
import "./ProductDetails.scss";
import { Container } from "../../components/container/Container";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../api";
import { handleAddToWishList } from "../../utils";
import { AccountButton, CartButton, FloatButton } from "../../components/buttons/Button";

export const ProductDetails = () => {
	const [productDetails, setProductDetails] = useState({});
	const params = useParams();
	const navigate = useNavigate();
	const [selected, setSelected] = useState(false);
	const [count, setCount] = useState(0);

	const fetchProductDetails = async (id) => {
		try {
			const response = await axios(
				`${API_URL}/api/productDetails/${id}` //simply passing id(param) along with url
				// const response = await axios(`${API_URL}/api/productDetails`, { //passing as query params
				// 	method: "GET",
				// 	params: {
				// 		id,
				// 	},
			);
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
		{
			count < 10 && setCount((prev) => prev + 1);
		}
	};
	const handleCountDecrement = () => {
		{
			count > 0 && setCount((prev) => prev - 1);
		}
	};

	useEffect(() => {
		fetchProductDetails(params.id);
	}, []);

	return (
		<Container showHeader>
			<div className="product-details-container">
				{/* <FloatButton onClick={() => navigate(-1)} icon="/icons/Arrow - Left.svg" /> */}
				<div className="product">
					<div className="col1">
						<p className="brand">{productDetails.brand}</p>
						<p className="title">{productDetails.title}</p>
						<div className="product-img-container">
							<img className="product-img" src={productDetails.image} alt={"product id:" + params.id} />
						</div>
						<i className="fa-regular fa-heart"  onClick={handleAddToWishList}> </i>
					</div>

					<div className="col2">
						<div className="carrousel">
							<img
								src="https://assets.ajio.com/medias/sys_master/root/20230624/VYr3/6495fdfaa9b42d15c9cd42b5/-473Wx593H-465048960-maroon-MODEL.jpg"
								alt="product"
							/>
							<img
								src="https://assets.ajio.com/medias/sys_master/root/20230624/VYr3/6495fdfaa9b42d15c9cd42b5/-473Wx593H-465048960-maroon-MODEL.jpg"
								alt="product"
							/>
							<img
								src="https://assets.ajio.com/medias/sys_master/root/20230624/VYr3/6495fdfaa9b42d15c9cd42b5/-473Wx593H-465048960-maroon-MODEL.jpg"
								alt="product"
							/>
							<img
								src="https://assets.ajio.com/medias/sys_master/root/20230624/VYr3/6495fdfaa9b42d15c9cd42b5/-473Wx593H-465048960-maroon-MODEL.jpg"
								alt="product"
							/>
							<img
								src="https://assets.ajio.com/medias/sys_master/root/20230624/VYr3/6495fdfaa9b42d15c9cd42b5/-473Wx593H-465048960-maroon-MODEL.jpg"
								alt="product"
							/>
						</div>

						<p className="price">{productDetails.price} ₹</p>
						<p className="details"> {productDetails?.details} </p>
						<div className="count-selector">
							<button className="count-btn" onClick={handleCountDecrement}>
								-
							</button>
							<p className="count"> {count} </p>
							<button className="count-btn" onClick={handleCountIncrement}>
								+
							</button>
						</div>
						<div className="size-container">
							<p className="b1">size</p>
							<div>
								{productDetails.size?.map((data) => (
									<button className="size" key={data} onClick={handleSizeSelection}>
										{data}
									</button>
								))}
							</div>
						</div>
						<div className="buttons">
							<CartButton text="Add to Wishlist" />
							<CartButton text="Add to Cart" />
						</div>

						{/* <button>Add to Wishlist</button> */}
					</div>
				</div>
			</div>
		</Container>
	);
};
