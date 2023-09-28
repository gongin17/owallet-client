import React from "react";
import { useSelector } from "react-redux";
import jwtDecode from "jwt-decode";
import { selectCurrentToken } from "../components/features/auth/authSlice";

const useAuth = () => {
  const token = useSelector(selectCurrentToken)

  if (token) {
    const decoded = jwtDecode(token);
    const { username } = decoded.userInfo;

    return { username };
  }

  return { username: "" };
};

export default useAuth;
