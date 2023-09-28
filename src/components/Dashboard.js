import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Transactions from "./Transactions";
import {
  FaBell,
  FaChevronDown,
  FaCreditCard,
  FaEdit,
  FaHome,
  FaHornbill,
  FaReceipt,
  FaSignOutAlt,
  FaUser,
  FaUserEdit,
} from "react-icons/fa";
import Charts from "../charts/Charts";
import useAuth from "../hooks/useAuth";
import {
  useGetAmountTransactionsMonthQuery,
  useGetAmountTransactionsWeekQuery,
  useGetAmountTransactionsTodayQuery,
} from "./features/transactions/transactionsSlice";
import { useDispatch } from "react-redux";

import { useLogOutMutation } from "./features/auth/authApiSlice";

const Dashboard = () => {
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

  const {
    data: weekAmount,

    isSuccess,
    isError,
    error,
  } = useGetAmountTransactionsWeekQuery();

  if (isSuccess) {
    console.log("amount sum week", weekAmount);
    const { ids, entities } = weekAmount;

    {
      ids.map((id) => console.log(" sum ", entities[id]));
    }
  }
  if (isError) console.log("error is", error);

  const [Balance, setBalance] = useState(0);

  const [TransactionInSevenDays, setTransactionInSevenDays] = useState(null);

  const [MoneyInSevenDays, setMoneyInSevenDays] = useState(0);
  const [MoneyInToday, setMoneyInToday] = useState(0);
  const [MoneyInMonth, setMoneyInMonth] = useState(0);
  const [MoneyInTotal, setMoneyInTotal] = useState(0);

  const [MoneyOutSevenDays, setMoneyOutSevenDays] = useState(0);
  const [MoneyOutToday, setMoneyOutToday] = useState(0);
  const [MoneyOutMonth, setMoneyOutMonth] = useState(0);
  const [MoneyOutTotal, setMoneyOutTotal] = useState(0);

  const [valueIn, setValueIn] = useState(0);
  const [valueOut, setValueOut] = useState(0);

  const navigate = useNavigate();

  const { username } = useAuth();

  console.log("user is :", username);

  

  const onOptionChangeHandlerIn = (e) => {
    setValueIn(e.target.value);
  };

  const [hidemenu, setHideMenu] = useState(false);

  return (
    <>
      <div className="dashboard-content">
        <div className="column1">
          <h1>Owallet</h1>

          <div className="">
            <button className="send-btn " onClick={() => navigate("/send")}>
              Send Money
            </button>
            {/*<FaChevronDown />*/}
          </div>

          <ul className="side-menu">
            <li>
              <FaHome style={{ fontSize: "23px", color: "grey" }} />
              <span>Home</span>
            </li>
            <li>
              <FaCreditCard style={{ fontSize: "23px", color: "grey" }} />{" "}
              <span>Cards</span>
            </li>
            <li>
              <FaHornbill style={{ fontSize: "25px", color: "grey" }} />
              <span>Bills</span>
            </li>
            <li>
              <FaReceipt style={{ fontSize: "23px", color: "grey" }} />
              <span>Recipients</span>
            </li>
            <li>
              <FaEdit style={{ fontSize: "23px", color: "grey" }} />
              <span>Manage</span>
            </li>
          </ul>
        </div>

        <div className="column2">
          <div className="bar">
            <div className="">
              <FaBell
                style={{ fontSize: "23px", color: "grey", marginTop: "9px" }}
              />
            </div>
            <div className="circle-p">HR</div>

            <div className="select-menu">
              <div
                className="select-btn"
                onClick={() => setHideMenu((prevHidemenu) => !prevHidemenu)}
              >
                <div className="">Select option</div>
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
              ) : (
                " "
              )}
            </div>
          </div>

          <div className="data-dashboard">
            <div className="btn-group">
              <button className="btn">Today</button>
              <button className="btn">7 Days</button>
              <button className="btn">30 Days</button>
              <button className="btn">All</button>
            </div>

            <div className="box-group">
              <div className="box">Account Balance</div>
              <div className="box">Money in </div>
              <div className="box"> Money out  {
      
    }
    </div>
              <div className="box">Money out</div>
            </div>

            <div className="">
              <Charts />
            </div>

            <h2 className="">Transactions</h2>
            <div className="">
              <Transactions />{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
