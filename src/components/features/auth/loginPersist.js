import { useState, useRef, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import usePersist from "../../../hooks/usePersist";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "./authSlice";
import { useRefreshMutation } from "./authApiSlice";

const LoginPersist = () => {
  
  const [persist] = usePersist();
  const token = useSelector(selectCurrentToken);
  const [done, setDone] = useState(false);
  const Ran= useRef(false)


  const [refresh, { isUninitialized, isLoading, isSuccess, isError, error }] =
    useRefreshMutation();

  useEffect(() => {

    if(Ran.current===true || process.env.MODE_ENV !=="development")  {

      const verifyRefreshToken = async () => {
        console.log("verify refresh token");
        try {
          await refresh();
          setDone(true);
        } catch (err) {
          console.log(err);
        } 
      };
         
      if (!token && persist) verifyRefreshToken()
    }
      
     return ()=> Ran.current=true
   
  },[]);



  let content;

  if (!persist) {
    content = (<Outlet />);
  } else if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isError) {
    content = (
      <p>
        <p>{error?.data?.message}</p> 
        <Link to={`/`}>Go to login page</Link>
      </p>
    );
  } else if (done && isSuccess) {
    content = (<Outlet />);
  } else if (token && isUninitialized) {
    content = (<Outlet />);
  }

  return content;
};

export default LoginPersist;
