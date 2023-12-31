import { Accounts } from "./pages/Accounts/Accounts";
import { Intro } from "./pages/Intro/Intro";
import { SignUp } from "./pages/Signup/SignUp";
import { Home } from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import { Error } from "./pages/Error/Error";
import { useContext } from "react";
import { ModeContext } from "./context/ModeContext";
import { ProductDetails } from "./pages/ProductDetails/ProductDetails";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Login } from "./pages/login/Login";
import { Cart } from "./pages/cart/Cart";
import { Wishlist } from "./pages/wishlist/Wishlist";

function App() {
	const { mode } = useContext(ModeContext);

	return (
		<div className="app-container" id={mode}>
			<Routes>
				<Route path="/" element={<Intro />} />
				<Route path="/accounts" element={<Accounts />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/login" element={<Login />} />
				<Route element={<ProtectedRoute />}>
					<Route path="/home" element={<Home />} />
					<Route path="/productDetails/:id" element={<ProductDetails />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/wishlist" element={<Wishlist />} />
				</Route>
				<Route path="*" element={<Error />} />
			</Routes>
		</div>
	);
}

export default App;
