import { useState } from "react";
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
              <i>username</i>
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="inputBox">
              <i>full name</i>
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="inputBox">
              <i>email</i>
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="inputBox">
              <i>password</i>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="inputBox">
              <i>type password again</i>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
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
