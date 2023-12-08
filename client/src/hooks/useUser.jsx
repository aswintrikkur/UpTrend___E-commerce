import React from "react";

export const useUser = () => {
	const postLocalStorage = (data) => {};

	const getLocalStorage = (data) => {
		const userNameModify = (name) => {
			const newName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
			return newName;
		};

		let userData = JSON.parse(localStorage.getItem("user"))?.userName;
		if (userData == "" || !userData) {
			return "Unknown";
		}
		const name = userNameModify(userData);
        return name
    };

	return {postLocalStorage ,getLocalStorage};
};
