// import axios from "axios";
// import React, { useEffect, useState } from "react";

// export const useSerachProducts = (searchProductList, setProductList) => {
// 	// const [productList, setProductList] = useState([]);
// 	// const [searchProductList, setSearchProductList] = useState("");

// 	const fetchSearchProductList = async () => {
// 		try {
// 			const response = await axios(`${API_URL}/api/searchProductList`, {
// 				method: "GET",
// 				params: {
// 					value: searchProductList,
// 				},
// 			});
// 			setProductList(response.data);
// 			// console.log(response);
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};

// 	//----- search field debouncing -------
// 	useEffect(() => {
// 		const timer = setTimeout(() => {
// 			fetchSearchProductList();
// 		}, 500);

// 		return () => {
// 			clearTimeout(timer);
// 		};
// 	}, [searchProductList]);

// 	return { searchProductList, productList, fetchSearchProductList };
// };
