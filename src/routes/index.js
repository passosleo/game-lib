import React from "react";
//Navigation
import { Route, BrowserRouter } from "react-router-dom";
//Pages
import Login from "../pages/login";
import Home from "../pages/home";

const Routes = () => {
   return(
      <BrowserRouter>
        <Route component = { Login }  path="/" exact />
        <Route component = { Home }  path="/home" />
      </BrowserRouter>
   );
};

export default Routes;