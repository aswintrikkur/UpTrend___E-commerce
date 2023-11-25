import React from "react";
import { Container } from "../../components/container/Container";
import { ProductCard } from "../../components/card/Card";
import './Wishlist.scss'

export const Wishlist = () => {
	return (
		<Container showHeader>
			<div className="wishlist-container"> 
            <h1>WISHLIST</h1>
            {/* <ProductCard/> */}

            <h3 style={{margin:'100px 0'}} >Under Development</h3>
            </div>
		</Container>
	);
};
