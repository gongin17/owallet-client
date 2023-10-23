import { createSelector ,createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";


const usersAdapter=createEntityAdapter({})

const initialeState=usersAdapter.getInitialState({})


export const usersSlice=apiSlice.injectsEndpoints(

{
    endPoints:builder =>({
        
         
         getUserBalance: builder.query({
            query: (username) => "/api/user/balance",
            tagTypes: ["Transaction","User"],
            
            body: { username },

            transformResponse: (responseData) => {
             
              return responseData
            },
      
          }),



    })
}


)
