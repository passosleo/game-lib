import React from 'react';
import './styles.css';
import Person from '@material-ui/icons/Person';
import Lock from '@material-ui/icons/Lock';

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
              <Person className="icon"/>
              <input type="text" placeholder="Username"/>
            </div>
            <div className="input">
              <Lock className="icon"/>
              <input type="password" placeholder="Password"/>
            </div>
            <button>Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
