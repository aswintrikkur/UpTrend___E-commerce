let liked = false;
export const handleAddToWishList = (event) => {
	liked = !liked;
	event.target.className = liked ? "fa-solid fa-heart": "fa-regular fa-heart";
	event.currentTarget.style.color  = liked ? "rgb(241, 26, 26)" : "gray";
	console.log(liked);
};
