import { createSlice } from '@reduxjs/toolkit'

const fetchProductsList = async()=>{

}

const INITIAL_STATE = {
    productList: [],
}

const productsSlice = createSlice({
    name: 'products',
    initialState: INITIAL_STATE,
    reducers: {
        // fetchProducts: (state, action) => {
        //     const { products } = action.payload;
        //     state.productList = products;
        //     console.log(products);

        // }
    },
    // extraReducers:{
    
    // }

});

export const { fetchProducts } = productsSlice.actions;

export const productReducer = productsSlice.reducer; 