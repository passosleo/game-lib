import React, {useState} from 'react';
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
import HomeIcon from '@material-ui/icons/Home'
import Wallet from '@material-ui/icons/AccountBalanceWallet'
import Inbox from '@material-ui/icons/Inbox'
import Notifications from '@material-ui/icons/Notifications'
//Images
import Avatar from '../assets/images/avatar.jpg'
//Navigation
import { Link } from "react-router-dom";

const Layout = ({children}) => {
  const [itemMenu, setItemMenu] = useState(null)

  const menuSelection = (option) => {
    switch (option) {
      case 1:
        return setItemMenu(1)
      case 2: 
        return setItemMenu(2)
      case 3:
        return setItemMenu(3)
      case 4: 
        return setItemMenu(4)
      case 5: 
        return setItemMenu(5)
      default:
        return setItemMenu(null)
    }
  }

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

            <div className="divisor" />
            
            <div className="menuTitle">
              <Menu />
              <h2>Menu</h2>
            </div>

            <div className="divisor" />
            
            <nav>
              <ul>
                <li>
                  <Link className="link" to="/home">
                    <button className={itemMenu === 1 || itemMenu === null ? "btnMenu temp2" : "btnMenu" } onClick={() => menuSelection(1)}>
                      <HomeIcon />
                      <span>Home</span>
                    </button>
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/store">
                    <button className={itemMenu === 2 ? "btnMenu temp2" : "btnMenu" } onClick={() => menuSelection(2)}>
                      <Store />
                      <span>Loja</span>
                    </button>
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/library">
                    <button className={itemMenu === 3 ? "btnMenu temp2" : "btnMenu" } onClick={() => menuSelection(3)}>
                      <Widgets />
                      <span>Biblioteca</span>
                    </button>
                  </Link>
                </li>
                <li>
                <Link className="link" to="/favorites">
                    <button className={itemMenu === 4 ? "btnMenu temp2" : "btnMenu" } onClick={() => menuSelection(4)}>
                      <Star />
                      <span>Favoritos</span>
                    </button>
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/achievements">
                    <button className={itemMenu === 5 ? "btnMenu temp2" : "btnMenu" } onClick={() => menuSelection(5)}>
                      <Trophy />
                      <span>Conquistas</span>
                    </button>
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="divisor" />

            <div>
              <ul className="menuFooter">
                <li>
                  <Link className="link" to="/">
                    <Exit className="icon" onClick={() => menuSelection()}/>
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
            <nav>
              <ul className="topMenu">
                <li>
                  <Notifications />
                  <span>Notificações</span>
                </li>
                <li>
                  <Inbox />
                  <span>Inventário</span>
                </li>

                <div className="divisorVertical"/>

                <li className="wallet">
                  <span>R$90,00</span>
                  <Wallet />
                </li>
              </ul>
            </nav>

            <div className="children">
              {children}
            </div>
            

          </div>

        </div>

      </div>
    </>
  );
};

export default Layout;