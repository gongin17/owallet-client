import { useState, useEffect, useRef } from "react";
import '../../../css/login.css'
import { Link } from "react-router-dom";
import { setCredentials } from "./authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "./authApiSlice";
import usePersist from "../../../hooks/usePersist";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [persist, setPersist] = usePersist();

  const [login, { isLoading, error ,isError}] = useLoginMutation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const verifyUP = username && password;

  const handlePersist = () => setPersist((prev) => !prev);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { accessToken } = await login({ username, password }).unwrap();
      dispatch(setCredentials({ accessToken }));
      console.log("accessToken", accessToken);

      setUsername("");
      setPassword("");

      navigate("/dashboard");
    } catch (err) {
      console.log(err);
    }
    
  };

 
 // if (isLoading) return <div>Loading...</div>;
  
  //else if(isError){ return <p style={{color:"red"}}>{error.data.message}</p>}  

  return (
    <section>   
      <div className="login"> 
        <div className="content"> 
       <h3>Sign In</h3>
        {isLoading ?<div>Loading...</div>:""}
        {isError?<p style={{color:"#ff0000"}}>{error?.data?.message}</p>:""}

      <form className="form" onSubmit={handleSubmit}>
        <div className="inputBox">
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
          <i>Username</i>
        </div>
        <div className="inputBox">
          
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <i>Password</i>
        </div>
        <div className="links"> <Link className="Link" to="#">Forgot Password</Link> <Link className="Link" to="/signup">Signup</Link> 

      </div>
        <div className="inputBox">
        <input type="submit" value="Login"/> 
        </div>
      </form>
    </div>
    </div>
    </section>
  );
};

export default Login;
