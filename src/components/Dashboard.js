import { useState ,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Transactions from "./Transactions";
import {FaCreditCard,
  FaEdit,
  FaHome,
  FaHornbill,
  FaReceipt,
 
} from "react-icons/fa";
import Charts from "../charts/Charts";
import useAuth from "../hooks/useAuth";
import Nav from "./nav";
import {
  useGetAmountInTransactionsMonthQuery,useGetAmountInTransactionsWeekQuery
  ,useGetAmountInTransactionsTodayQuery,useGetAmountOutTransactionsMonthQuery,
  useGetAmountOutTransactionsTodayQuery,useGetAmountOutTransactionsWeekQuery,
  useGetAmountInTransactionsTotalQuery,
  useGetAmountOutTransactionsTotalQuery
} from "./features/transactions/transactionsSlice";


const Dashboard = () => {
  
  const [Balance, setBalance] = useState(208710);
  const [x, setX] = useState(1);
  const [darkMode, setDarkMode] = useState(false);


  const {data: todayAmountIn, isSuccess,isError,error,} = useGetAmountInTransactionsTodayQuery();
  const {data: thisWeekAmountIn, } = useGetAmountInTransactionsWeekQuery();
  const {data: lastMonthAmountIn,} = useGetAmountInTransactionsMonthQuery();
  const {data: todayAmountOut, } = useGetAmountOutTransactionsTodayQuery();
  const {data: thisWeekAmountOut, } = useGetAmountOutTransactionsWeekQuery();
  const {data: lastMonthAmountOut} = useGetAmountOutTransactionsMonthQuery();
  const {data: totalAmountIn } = useGetAmountInTransactionsTotalQuery();
  const {data: totalAmountOut} = useGetAmountOutTransactionsTotalQuery();


  const navigate=useNavigate()

  if (isSuccess) {
 
    console.log("=====", totalAmountIn,totalAmountOut);
  }

  if (isError) console.log("error is", error);

 

  useEffect(() => {
    
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };


  


  const { username } = useAuth();



  const caseComponentsIn = {
    1: <div>{todayAmountIn?.sum}</div>,
    7: <div>{thisWeekAmountIn?.sum}</div>,
    30: <div>{lastMonthAmountIn?.sum}</div>,
    0: <div>{totalAmountIn?.sum}</div>,
  };

  const caseComponentsOut = {
    1: <div>{todayAmountOut?.sum}</div>,
    7: <div>{thisWeekAmountOut?.sum}</div>,
    30: <div>{lastMonthAmountOut?.sum}</div>,
    0: <div>{totalAmountOut?.sum}</div>,
  };

  {/*
      <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <h1>Welcome to the Dark Mode Example</h1>
      <p>This is some content.</p>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </div>
*/}

  return (
    <>
    <Nav />
      <div className="dashboard-content">  
        <div className="column1">
          <ul className="side-menu">
        
            <li>
              <FaHome style={{ fontSize: "23px", color: "grey" }} />
              <span>Home</span>
            </li>
         
            <li>
              <FaReceipt style={{ fontSize: "23px", color: "grey" }} />
              <span>Recipients</span>
            </li>
            
            <li>
              <FaEdit style={{ fontSize: "23px", color: "grey" }} />
              <span>Manage</span>
            </li>
         
            <li>
              <FaHornbill style={{ fontSize: "25px", color: "grey" }} />
              <span>Bills</span>
            </li>
           
         
          </ul>
        </div>

        <div className="column2">
          <div className="">
          <div className="">
          <button className="send-btn" onClick={()=>navigate("/send")}>send money</button>
          </div>
            <div className="btn-group">
              <button className="btn" onClick={()=>setX(1)}>Today</button>
              <button className="btn" onClick={()=>setX(7)}>7 Days</button>
              <button className="btn" onClick={()=>setX(30)}>30 Days</button>
              <button className="btn" onClick={()=>setX(0)}>All</button>
            </div>

            <div className="box-group">
              <div className="box"><span>Balance </span>{Balance}</div>
              <div className="box"><span>Money in </span>{caseComponentsIn[x]} </div>
              <div className="box"><span>Money out </span>{caseComponentsOut[x]}</div>
            </div>

            <div className="">
              <Charts />
            </div>
             
            <div className="">
            <h2 className="">Transactions</h2>
              <Transactions />
              </div>
          </div>
        </div>
      </div>

      </>
    
  );
};

export default Dashboard;
