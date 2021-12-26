import React from 'react';
//Styles
import './styles.css';
//Icons
import Menu from '@material-ui/icons/Menu';
import Store from '@material-ui/icons/Store';
import Widgets from '@material-ui/icons/Widgets';
import Star from '@material-ui/icons/Star';
import Trophy from '@material-ui/icons/EmojiEvents'
import Exit from '@material-ui/icons/ExitToApp'
import Settings from '@material-ui/icons/Settings'
import Help from '@material-ui/icons/Help'
//Images
import Avatar from '../../assets/images/avatar.jpg'
//Navigation
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="containerBody">

        <div className="containerHome">

          <div className="containerMenu">

            <div className="profile">
              <img src={Avatar} />
              <div className="flex">
                <a href="#"><span>Leonardo</span></a>
                <div className="status"/>
              </div>
            </div>
            
            <div className="menuTitle">
              <Menu />
              <h2>Menu</h2>
            </div>
            
            <nav>
              <ul>
                <li>
                  <button className="btnMenu">
                    <Store />
                    <span>Loja</span>
                  </button>
                </li>
                <li>
                  <button className="btnMenu temp2">
                    <Widgets />
                    <span>Biblioteca</span>
                  </button>
                </li>
                <li>
                  <button className="btnMenu">
                    <Star />
                    <span>Favoritos</span>
                  </button>
                </li>
                <li>
                  <button className="btnMenu">
                    <Trophy />
                    <span>Conquistas</span>
                  </button>
                </li>
              </ul>
            </nav>

            <div className="divisor" />

            <div>
              <ul className="menuFooter">
                <li>
                  <Link className="link" to="/">
                    <Exit className="icon"/>
                  </Link>
                </li>
                <li>
                  <Help className="icon"/>
                </li>
                <li>
                  <Settings className="icon"/>
                </li>
              </ul>
            </div>

          </div>

          <div className="containerPrincipal">
            <h1>Home</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
          </div>

        </div>

      </div>
    </>
  );
};

export default Home;