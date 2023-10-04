import { useState } from 'react';
import '../css/nav.css'
import { useLogOutMutation } from "./features/auth/authApiSlice";
import { useNavigate } from "react-router-dom";
import {FaBell,FaChevronDown,FaMoon,FaSignOutAlt,FaUser,
  FaUserEdit,} from "react-icons/fa";


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
      <a href="/">Zwallet</a>
    </div>
 
    <div className="user-menu">

          <a href="#">  
           <FaBell style={{ fontSize: "20px", color: "grey", margin: "13px" }}/>
          </a>
          <a href="#">  
            <FaMoon style={{ fontSize: "20px", color: "grey", margin: "13px" }}/>
          </a>

          <a href="#" >
          <FaChevronDown style={{ fontSize: "20px", color: "grey", margin: "13px" }}  onClick={toggleDropdown}/>
           
            <div className={`dropdown ${isDropdownOpen ? 'active' : ''}`}>
                 {isDropdownOpen && (
                    <ul className="dropdown-menu">
                     <li> 
                      <FaUser style={{ fontSize: "21px" }} />
                      <span className="">Profile</span></li>
                     <li> 
                      <FaUserEdit style={{ fontSize: "21px" }} />
                      <span className="">Settings</span>
                     </li>
                     <li onClick={() => logout()}>
                      <FaSignOutAlt style={{ fontSize: "21px" }} />
                      <span className="">Log Out</span>
                     </li>
                  </ul>
                 )}
                 </div>
             </a>
    </div>

  </nav>
)
}

export default Nav