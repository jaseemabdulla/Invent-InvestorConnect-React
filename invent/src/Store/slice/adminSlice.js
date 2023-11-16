import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name:'admin',
    initialState:{
        user:null,
        token:''
    },
    reducers:{
        adminLogin:(state, action)=>{
            state.user = action.payload.user
            state.token = action.payload.token

        },
        adminLogout:(state)=>{
            state.user = null
            state.token = ''
        }
    }
})

export const {adminLogin, adminLogout} = adminSlice.actions
export  default adminSlice.reducer