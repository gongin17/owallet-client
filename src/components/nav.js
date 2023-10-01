import { useState } from 'react';
import '../nav.css'
import { useLogOutMutation } from "./features/auth/authApiSlice";
import { useNavigate } from "react-router-dom";
import {FaBell,FaChevronDown,FaMoon,} from "react-icons/fa";


const Nav = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => { 
      setDropdownOpen(!isDropdownOpen);
    };

    const [logOut] = useLogOutMutation();
    const navigate = useNavigate();
  
    const logout = async () => {
      try {
        await logOut();
        navigate("/");
      } catch (err) {
        console.log(err);
      }
    };


  return (
  <nav className="navbar">
    <div className="logo">
      <a href="/">Logo</a>
    </div>
 
    <div className="user-menu">

            <a href="#">  
              <FaBell style={{ fontSize: "20px", color: "grey", margin: "13px" }}/>
            </a>
            <a href="#">  
              <FaMoon style={{ fontSize: "20px", color: "grey", margin: "13px" }}/>
            </a>
            <a href="#">
                <FaChevronDown style={{ fontSize: "20px", color: "grey", margin: "13px" }} />
             </a>
    </div>

  </nav>
)
}

export default Nav