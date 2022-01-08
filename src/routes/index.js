import React from "react";
//Navigation
import { Route, BrowserRouter } from "react-router-dom";
//Layout
import Layout from "../layout";
//Pages
import Login from "../pages/login";
import Home from "../pages/home";
import Store from "../pages/store";
import Library from "../pages/library";
import Favorites from "../pages/favorites";
import Achievements from "../pages/achievements";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Login} path="/" exact />
      <Layout>
        <Route component={Home} path="/home" />
        <Route component={Store} path="/store" />
        <Route component={Library} path="/library" />
        <Route component={Favorites} path="/favorites" />
        <Route component={Achievements} path="/achievements" />
      </Layout>
    </BrowserRouter>
  );
};
export default Routes;  
