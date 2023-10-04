import "./App.css";
import Dashboard from "./components/Dashboard";
import SendMoney from "./components/SendMoney";

import { Routes, Route } from "react-router-dom";
import Signup from "./components/features/auth/Signup";
import Login from "./components/features/auth/Login";
import LoginPersist from "./components/features/auth/loginPersist";
import PrivateRoute from "./components/features/auth/privateRoute";
import Nav from "./components/nav";


function App() {
  return (
    <div className="App">
      
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      
       


        <Route element={<LoginPersist />}>
          <Route element={<PrivateRoute />}>
         
            <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/send" element={<SendMoney />} />
          </Route>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
