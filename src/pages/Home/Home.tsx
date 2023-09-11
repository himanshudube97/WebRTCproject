import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import { Card } from "../../components/shared/Card/Card";
import { Button } from "../../components/shared/Button/Button";

export const Home = () => {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/register");
  };
  const signInLinkStyle = {
    color: "#0077ff",
    fontWeight: "bold",
    textDecoration: "none",
    marginLeft: "10px",
  };
  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to Coderhouse!!!" icon="logo">
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
          libero magni labore consequuntur officia perspiciatis similique nemo
          nostrum iusto distinctio!
        </p>
        <div>
          <Button text="Get Your Username" onClick={handleRegister}></Button>
        </div>
        <div className={styles.signinWrapper}>
          <span className={styles.hasInvite}>Have an invite text?</span>
          <Link style={signInLinkStyle} to="/Login">
            Sign In
          </Link>
        </div>
      </Card>
    </div>
  );
};
