import React from "react";
import "./Home.css";
import "antd/dist/antd.css";
import { Button } from "antd";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <center >
      <div className="LoginSection">
        <h1>University name</h1>
        <Link to="/Login">
          <Button type="primary">Login</Button>
        </Link>
      </div>
    </center>
  );
};

export default Home;
