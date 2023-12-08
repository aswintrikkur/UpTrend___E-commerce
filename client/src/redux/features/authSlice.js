import { createSlice } from "@reduxjs/toolkit";

initialState={
    user:{},
    userName:'',
    accessToken:''
}

const authSlice=  createSlice({
    name:'auth',
    initialState,
    reducers:{
        fetchUser:(state,action)=>{


        },
        fetchAccessToken:(state,action)=>{

        }


    }
})