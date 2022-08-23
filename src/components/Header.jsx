import React, { useEffect, useRef } from "react";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { NavLink, Link } from "react-router-dom";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import './Header.css'


const NAV__LINKS = [
  {
    display: "Home",
    url: "/",
  },
  {
    display: "Market",
    url: "/market",
  },
  {
    display: "Crypto",
    url: "/crypto",
  },
 
];

const Header = () => {
    const menuRef = useRef(null)
    const headerRef = useRef(null)

    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         if (
    //             document.body.scrollTop > 80 ||
    //             document.documentElement.scrollTop > 80
    //         ) {
    //             headerRef.current.classList.add("header__shrink");
    //         } else {
    //             headerRef.current.classList.remove("header__shrink");
    //         }
    //     });

    //     return () => {
    //         window.removeEventListener("scroll", null)
    //     }
    // }, [])

    const toggleMenu = () => menuRef.current.classList.toggle('active__menu')


  return (
    <header className="header" ref={headerRef}>
        <div className="navigation">
          <div className="logo">
            <h2>
              DeFi <AccountBalanceIcon />
            </h2>
          </div>

          <div className="nav__menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="nav__list">
              {NAV__LINKS.map((item, index) => (
                <li className="nav__item" key={index}>
                  <NavLink to={item.url} className= { navClass => navClass.isActive ? 'active' : ''}>{item.display}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav__right">
            <button className="btn">
              <Link to="/wallet">
                 Connect Wallet
              </Link>
            </button>

            <span className="mobile__menu">
              <MenuOutlinedIcon style={{fontSize: 40}} onClick={toggleMenu}/>
            </span>
          </div>
        </div>
    </header>
  );
}

export default Header;
