import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import {useGlobalContext} from './context';

const Navbar = () => {
  //use context objet
  const {openSidebar, openSubmenu, closeSubmenu} = useGlobalContext();

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom -3;
    openSubmenu(page, {center, bottom});
  }

  const handlerSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
        closeSubmenu();
    }
  }

  return (
      <nav className="nav" onMouseOver={handlerSubmenu}>
          <div className="nav-center">
              {/*Header*/}
            <div className="nav-header">
                <img src={logo} alt="stripe" className="nav-logo"/>
                {/*Bouton de basculement de menus*/}
                <button className="btn toggle-btn" onClick={openSidebar}>
                    <FaBars />
                </button>
            </div>
            {/*Fin de Header ...*/}

            {/*Les menus*/}
            <ul className="nav-links">
                <li>
                    <button className="link-btn" onMouseOver={displaySubmenu}>
                        products
                    </button>
                </li>
                <li>
                    <button className="link-btn" onMouseOver={displaySubmenu}>
                        developers
                    </button>
                </li>
                <li>
                    <button className="link-btn" onMouseOver={displaySubmenu}>
                        company
                    </button>
                </li>
            </ul>
            {/*Fin de menus ...*/}

            {/*Loginh*/}
            <button className="btn signin-btn">Sign in</button>
          </div>
      </nav>
  );
}

export default Navbar