import { useState, useEffect, useRef } from "react";
import "../../../App.css";
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

  const [login, { isLoading, error }] = useLoginMutation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const verifyUP = username && password;

  const handlePersist = () => setPersist((prev) => !prev);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //if (verifyUP) console.log("now login can be posted", verifyUP);

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

  if (isLoading) return <div>Loading...</div>;

  return (
    <section>
      <div  className="login">
       <div className="content"> 
      <h2>Sign In</h2>
    
    
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