
import { apiSlice } from "../api/apiSlice";
import { logOut ,setCredentials } from "./authSlice";

 const authApiSlice = apiSlice.injectEndpoints({

  endpoints: (builder) => ({


    login : builder.mutation({
      query: (credencials) => ({
        url: "/auth",
        method: "POST",
        body: { ...credencials }
      })
    }),
    
    logOut: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;

          dispatch(logOut());
          dispatch(apiSlice.util.resetApiState());
        } catch (err) {
          console.log(err);
        }
      },
    }),

    refresh: builder.mutation({
      query: () => ({
        url: "/auth/refresh",
        method: 'GET',
      }),

      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
        const {data}=  await queryFulfilled;
        console.log("data===",data)
          const {accessToken}=data;
          dispatch(setCredentials({accessToken}));
        
        } catch (err) {
          console.log(err);
        }
      }
    }),

    signup : builder.mutation({
      query: (userInfos) => ({
        url: "/auth/signup",
        method: "POST",
        body: { ...userInfos }
      })
    }),


       
})

})


export const {useLoginMutation,useRefreshMutation,useLogOutMutation ,useSignupMutation} = authApiSlice;
