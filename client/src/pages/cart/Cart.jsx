import React from "react";
import { Container } from "../../components/container/Container";
import './Cart.scss'
import { ProductCard } from "../../components/card/Card";

export const Cart = () => {
	return (
		<Container showHeader>
			<div className="cart-container">

                <h1>CART</h1>

				{/* <ProductCard /> */}

                {/* <h3 style={{margin:'100px 0'}} >Under Development</h3> */}
            </div>
		</Container>
	);
};
