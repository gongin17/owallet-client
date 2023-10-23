import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";

import { apiSlice } from "../api/apiSlice";

const transactionsAdapter = createEntityAdapter({});
const initialeState = transactionsAdapter.getInitialState();

export const transacationsApiSlice = apiSlice.injectEndpoints({ 
 
 
  endpoints: (builder) => ({


    getTransactions: builder.query({
      query: () => "/api/transaction",
      tagTypes: ["Transaction","User"],
      transformResponse: (responseData) => {
        console.log("response data ", responseData);
        return transactionsAdapter.setAll(initialeState, responseData);
      },


    }),
    getAmountInTransactionsToday: builder.query({
      query: () => "/api/transaction/today/in/amount",
      
      transformResponse: (responseData) => {
      
       return responseData;
      },
    }),
    getAmountInTransactionsWeek: builder.query({
      query: () => "/api/transaction/week/in/amount",
      
      transformResponse: (responseData) => {
 
        return responseData;
      },
    }),
    getAmountInTransactionsMonth: builder.query({
      query: () => "/api/transaction/month/in/amount",
      
      transformResponse: (responseData) => {
      
       return responseData;
      },
    }),
     getAmountInTransactionsTotal: builder.query({
      query: () => "/api/transaction/total/in/amount",
      
      transformResponse: (responseData) => {
        
       return responseData;
      },
    }),


/////out

    getAmountOutTransactionsToday: builder.query({
      query: () => "/api/transaction/today/out/amount",
      
      transformResponse: (responseData) => {
      
        return responseData;
      },
    }),
    getAmountOutTransactionsWeek: builder.query({
      query: () => "/api/transaction/week/out/amount",
      
      transformResponse: (responseData) => {

        return responseData;
      },
    }),
    getAmountOutTransactionsMonth: builder.query({
      query: () => "/api/transaction/month/out/amount",
      
      transformResponse: (responseData) => {
       return responseData;
      },
    }),
    getAmountOutTransactionsTotal: builder.query({
      query: () => "/api/transaction/total/out/amount",
      
      transformResponse: (responseData) => {
       return responseData;
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

export const { useGetTransactionsQuery , useCreateNewTransactionMutation ,useGetAmountInTransactionsMonthQuery,
  useGetAmountInTransactionsWeekQuery,useGetAmountInTransactionsTodayQuery,useGetAmountOutTransactionsMonthQuery,
  useGetAmountOutTransactionsTodayQuery,useGetAmountOutTransactionsWeekQuery,useGetAmountInTransactionsTotalQuery,
  useGetAmountOutTransactionsTotalQuery
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
