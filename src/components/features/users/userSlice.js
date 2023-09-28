import { createSelector ,createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";


const usersAdapter=createEntityAdapter({})

const initialeState=usersAdapter.getInitialState({})


export const usersSlice=apiSlice.injectsEndpoints(

{
    endPoints:builder =>({
         getUsers:builder.query({}),
         



    })
}


)
