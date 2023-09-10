import React from "react";
import {Link} from "react-router-dom";
export const Home = () => {
  return (
    <div className="card">
      <div className="headingwrapper">
        <img src="/images/wave.png" width={50} alt="" />
        <h1>Welcome to CodersHouse</h1>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
        libero magni labore consequuntur officia perspiciatis similique nemo
        nostrum iusto distinctio!
      </p>
      <div>
        <button>
          <span>Get your username</span>
          <img src="/images/arrow.png" width={50} alt="image" />
        </button>
      </div>
      <div>
        <span>Have an invite text?</span>
        <Link to="/Login">Sign In</Link>
      </div>
    </div>
  );
};
