import React from "react";
import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";
import { logout } from "../../../http-service";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../../store/authSlice";
export const Navigation = () => {
  const dispath = useDispatch();
  const { isAuth, user } = useSelector((state: any) => state.auth);
  const brandStyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "22px",
    display: "flex",
    alignItems: "center",
  };

  const logoText = {
    marginLeft: "10px",
  };

  const onLogoutUser = async () => {
    try {
      const { data } = await logout();
      dispath(setAuth(data));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav className={`${styles.navbar} container`}>
      {/* // css taking from global app.css */}
      <Link style={brandStyle} to="/">
        <img width={50} src="/images/wave.png" alt="logo" />
        <span style={logoText}>Coder</span>
      </Link>
      {isAuth ? <button onClick={onLogoutUser}>Logout</button> : ""}
      {/* <button onClick={onLogoutUser}>Logout</button> */}
    </nav>
  );
};
