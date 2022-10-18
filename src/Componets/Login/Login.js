import React from "react";
import "./Login.css";
import "antd/dist/antd.css";
import { Button } from "antd";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <center className="mainbackGruond">
      <div className="categroySection">
        <div>
          <h1>Select Catergory</h1>
        </div>
        <div className="loginBuutonSection">
        <Link to="/AdminLogin">
          <Button className="buttonAdmin" type="primary">
            Admin
          </Button>
        </Link>
        <Link to="/FacultyLogin">
          <Button className="buttonFac" type="primary">
            Faculty
          </Button>
        </Link>
        </div>
      </div>
    </center>
  );
};

export default Login;
