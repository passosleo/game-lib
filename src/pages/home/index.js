import React from 'react';
//Styles
import './styles.css';
//Icons
import Menu from '@material-ui/icons/Menu';
//Images
import Avatar from '../../assets/images/avatar.jpg'

const Home = () => {
  return (
    <>
      <div className="containerBody">

        <div className="containerHome">

          <div className="containerMenu">

            <div className="profile">
              <img src={Avatar} />
              <div className="flex">
                <a href="#"><span>Leonardo Passos</span></a>
                <div className="status"/>
              </div>
            </div>
            
            <div className="menuTitle">
              <Menu className="icon"/>
              <h2>Menu</h2>
            </div>
            

            <nav>
              <ul>
                <li>
                  <button>Loja</button>
                </li>
                <li>
                  <button>Biblioteca</button>
                </li>
                <li>
                  <button>Favoritos</button>
                </li>
                <li>
                  <button>Conquistas</button>
                </li>
              </ul>
            </nav>

          </div>

          <div className="containerPrincipal">
            <h1>home</h1>
          </div>

        </div>

      </div>
    </>
  );
};

export default Home;