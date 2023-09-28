import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";

import { apiSlice } from "../api/apiSlice";

const transactionsAdapter = createEntityAdapter({});
const initialeState = transactionsAdapter.getInitialState();

export const transacationsApiSlice = apiSlice.injectEndpoints({ 
 
 
  endpoints: (builder) => ({


    getTransactions: builder.query({
      query: () => "/api/transaction",
      
      transformResponse: (responseData) => {
        console.log("response data ", responseData);
        return transactionsAdapter.setAll(initialeState, responseData);
      },

      
     // providesTags: ["Transaction"],

      

      /* validateStatus:(response,result)=>{
               return response.status===200 && !result.isError
          }*/
    }),
    getAmountTransactionsToday: builder.query({
      query: () => "/api/transaction/today/amount",
      
      transformResponse: (responseData) => {
        console.log("response data ", responseData);
        return transactionsAdapter.setAll(initialeState, responseData);
      },
    }),
    getAmountTransactionsWeek: builder.query({
      query: () => "/api/transaction/week/amount",
      
      transformResponse: (responseData) => {
        console.log("response data ", responseData);
        
        return transactionsAdapter.setAll(initialeState, responseData);
      },
    }),
    getAmountTransactionsMonth: builder.query({
      query: () => "/api/transaction/month/amount",
      
      transformResponse: (responseData) => {
        console.log("response data ", responseData);
        return transactionsAdapter.setAll(initialeState, responseData);
      },
    }),

    createNewTransaction: builder.mutation({
      query: (formData) => ({
        url: "/api/transaction",
        method: 'POST',
        body:{...formData},
      })

    }),


   


  }) 

});

export const { useGetTransactionsQuery , useCreateNewTransactionMutation ,useGetAmountTransactionsTodayQuery
,useGetAmountTransactionsMonthQuery,useGetAmountTransactionsWeekQuery
} = transacationsApiSlice;

export const selectResult =transacationsApiSlice.endpoints.getTransactions.select();

const selectTransactionsData = createSelector(
  selectResult,
  (transactionsResult) => transactionsResult.data
);

export const { selectAll, selectById, selectIds } =
  transactionsAdapter.getSelectors(
    (state) => selectTransactionsData(state) ?? initialeState
  );
