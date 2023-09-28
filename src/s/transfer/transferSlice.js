import React from "react";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const ACCOUNT_TRANSACTIONS_API_URL =
  "http://onlinewallet-env.eba-kvnmjap9.us-east-1.elasticbeanstalk.com/transactions";

const getTransactions = createAsyncThunk(
  "transactons/getTransactions",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(ACCOUNT_TRANSACTIONS_API_URL);
    } catch(error) {console.log(error)}
    return data;
  }
);

const transferSlice = createSlice({
    name:'transactions',
    initialState:{transactions:null}
    ,extraReducers:{
        [getTransactions.pending]:(state,action)=>{
             console.log(action)
        },
        [getTransactions.fulfilled]:(state,action)=>{
            console.log(action)
       },
       [getTransactions.rejected]:(state,action)=>{
        console.log(action)
   }

    }

});

export default transferSlice;
