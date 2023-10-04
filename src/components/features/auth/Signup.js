import { useState } from "react";
import '../../../css/signup.css'
import { useSignupMutation } from "./authApiSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";



const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFistName] = useState("");
  const [lastName, setLastName] = useState("");
  const [balance, setBalance] = useState("");

  const dispatch=useDispatch()
  const navigate=useNavigate()

  const [signup,{isLoading,error}]=useSignupMutation()

  const handleSubmit =async (e) => {
    e.preventDeafault()

    try{

      await dispatch(signup({username,password,firstName,lastName,balance,email}))

    }catch(err){
      console.log("error",err)
    }


  };

  return (
    <section>
      <div className="signup">
        <div className="content">
          <h2>Signup</h2>

          <form className="form" onSubmit={handleSubmit}>
            <div className="inputBox">
              
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
              />
              <i>username</i>
            </div>
            <div className="inputBox">
              
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
              />
              <i>full name</i>
            </div>
            <div className="inputBox">
             
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
              />
               <i>email</i>
            </div>
            <div className="inputBox">
             
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
               <i>password</i>
            </div>
            <div className="inputBox">
             
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
               <i>type password again</i>
            </div>
            <div className="inputBox">
              <input type="submit" value=" Sign up " />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
