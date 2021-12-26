import React from 'react';
//Style
import './styles.css';
//Icons
import Person from '@material-ui/icons/Person';
import Lock from '@material-ui/icons/Lock';
//Navigation
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="containerBody">
        <div className="containerLogin">
          <div className="nav">
            <button className="temp">Login</button>
            <button>Register</button>
          </div>
          <div className="login">
            <div className="input">
              <Person />
              <input type="text" placeholder="Username"/>
            </div>
            <div className="input">
              <Lock />
              <input type="password" placeholder="Password"/>
            </div>
            <Link className="link" to="/home">
              <button>Login</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
