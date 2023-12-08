import { configureStore } from "@reduxjs/toolkit";
import  menuReducer  from "./features/menuSlice";
import { productReducer } from "./features/productsSlice";

export const store = configureStore({
    reducer: {
        menu: menuReducer,
        products: productReducer,
        // cart: 
    }
});


