import React , {useState} from "react";
import { useDispatch } from "react-redux";
import { useLogOutMutation } from "./features/auth/authApiSlice";
import {
    FaBell,
    FaChevronDown,
    FaSignOutAlt,
    FaUser,
    FaUserEdit,
  } from "react-icons/fa";
  import { useNavigate } from "react-router-dom";




const NavBar = () => {

    const [hidemenu, setHideMenu] = useState(false);

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const [logOut] = useLogOutMutation();
  
    const logout = async () => {
      try {
        await logOut();
        navigate("/");
      } catch (err) {
        console.log(err);
      }
    };


  return (
    <>
     

      <nav className="">
      <ul className="dropdown">

      <li className=""> <h1>Owallet</h1> </li>

      
      <div className="" style={{display:"flex",justifyContent:"space-around"}}>
          <li className="">

            <div className="">
              <FaBell
                style={{ fontSize: "23px", color: "grey", marginTop: "9px" }}
              />
            </div>

       
            </li>

          <li className="">

            <div className="select-menu">
              <div className="select-btn" onClick={() => setHideMenu((prevHidemenu) => !prevHidemenu)}>

              <div className="">select option</div>
                <FaChevronDown />
              </div>


              {hidemenu ? (
                <ul className="options">
                  <li className="option">
                    <FaUser style={{ fontSize: "21px" }} />
                    <span className="option-text">Profile</span>
                  </li>
                  <li className="option">
                    <FaUserEdit style={{ fontSize: "21px" }} />
                    <span className="option-text">Settings</span>
                  </li>
                  <li className="option" onClick={() => logout()}>
                    <FaSignOutAlt style={{ fontSize: "21px" }} />
                    <span className="option-text">Log Out</span>
                  </li>
                 
                </ul>
              ) : ("") }

            </div>

          </li>
          </div>
          </ul>
        </nav>

    </>
  );
};

export default NavBar;
