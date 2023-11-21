import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
    const auth = true;
    
	if (!auth) {
		return <Navigate to="/signup" />;
	}
    return <Outlet/>
};
