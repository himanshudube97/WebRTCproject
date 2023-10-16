import React from "react";
import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";
import { logout } from "../../../http-service";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../../store/authSlice";
import { setAvatar, setName } from "../../../store/activateSlice";
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
      dispath(setName(""));
      dispath(setAvatar(""));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav className={`${styles.navbar} container`}>
            <Link style={brandStyle} to="/">
                <img src="/images/logo.png" alt="logo" />
                <span style={logoText}>Codershouse</span>
            </Link>
            {isAuth && (
                <div className={styles.navRight}>
                    <h3>{user?.name}</h3>
                    <Link to="/">
                        <img
                            className={styles.avatar}
                            src={
                                user.avatar
                                    ? user.avatar
                                    : '/images/monkey-avatar.png'
                            }
                            width="40"
                            height="40"
                            alt="avatar"
                        />
                    </Link>
                    <button
                        // className={styles.logoutButton}
                        onClick={onLogoutUser}
                    >
                        LOGOUT
                    </button>
                </div>
            )}
        </nav>
  );
};
