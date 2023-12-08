import React, { useEffect, useRef } from "react";
import "./SearchInput.scss";

export const SearchInput = ({ searchInput, setSearchInput, fetchSearchProductList }) => {
	// ----- search field debouncing -------
	useEffect(() => {
		const timer = setTimeout(() => {
			fetchSearchProductList();
		}, 500);

		return () => {
			clearTimeout(timer);
		};
	}, [searchInput]);

	return (
		<div className="search-input-container">
			<img src="icons/Search.svg" className="search-icon" alt="" />
			<input
				className="search-input"
				value={searchInput}
				onChange={(e) => setSearchInput(e.target.value)}
				placeholder="Search..."
				type="text"
				autoComplete="off"
			/>
			{searchInput !== "" && (
				<div className="close-btn" onClick={() => setSearchInput("")}>
					X
				</div>
			)}
		</div>
	);
};
