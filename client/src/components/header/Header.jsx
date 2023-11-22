import React, { useRef } from "react";
import "./Header.scss";
import { FloatButton } from "../buttons/Button";

export const Header = () => {
    const menu = useRef();

        const handleMenu =(event)=>{
   
            if (event.target.name === 'menu') {
                // menu.current.style.backgroundColor='none'
                
              return  menu.current.style.rotate='90deg'
            }
            menu.current.style.rotate='0deg'
            

        }


	return (
		<div className="header-container " onClick={handleMenu} >
                <img className="menu" ref={menu} src="icons/menu.svg" name='menu' onClick={handleMenu} alt="menu" />

			<div className="logo">
				<img src="images/logo_big.png" alt="" />
				{/* <img src="logo/UpTrend_logo.svg" alt="" /> */}
				<span>UPTREND</span>
			</div>

			<div className="nav">
				<i className="fa-regular fa-heart fa-xl" style={{ color: "#ffffff" }}></i>
				<i className="fa-solid fa-cart-shopping fa-xl" style={{ color: "#ffffff" }}></i>
				{/* <i className="fa-solid fa-right-from-bracket fa-xl" style={{ color: "#ffffff" }}></i> */}
				{/* <p>WISHLIST</p> */}
				{/* <p>CART</p> */}
				{/* <p>LOG OUT</p> */}
			</div>
		</div>
	);
};
