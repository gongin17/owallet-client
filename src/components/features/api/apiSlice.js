import {createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {setCredentials} from '../auth/authSlice'


const apiUrl=process.env.REACT_APP_API

const baseQuery=fetchBaseQuery({
  baseUrl: apiUrl,
  credentials:'include',
  prepareHeaders:(headers, {getState})=>{
   const token =getState().auth.token
   if(token) headers.set("authorization",`Bearer ${token}`)
   return headers
  }

})


const baseQueryWithReauth= async (args,api,extraOptions)=>{

let result=await baseQuery(args,api,extraOptions)
  
if(result?.error?.status===403){
  console.log("sending refresh token")
  const refreshResult= await baseQuery('/auth/refresh',api,extraOptions)

  if(refreshResult?.data){
    api.dispatch(setCredentials({...refreshResult.data}))
    result= await baseQuery(args,api,extraOptions)
  }
  if(refreshResult?.error?.status===403){
      console.log("your login has expired")
   }

       return refreshResult
  } 

 return result
}




export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});

export const { useGetTransactionsQuery } = apiSlice;
