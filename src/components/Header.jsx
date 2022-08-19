import React from "react";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { NavLink, Link } from "react-router-dom";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
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
    display: "Create",
    url: "/create",
  },
  {
    display: "Contact",
    url: "/contact",
  },
];

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="navigation">
          <div className="logo">
            <h2>
              <AccountBalanceIcon /> NFT Vault
            </h2>
          </div>

          <div className="nav__menu">
            <ul className="nav__list">
              {NAV__LINKS.map((item, index) => (
                <li className="nav__item" key={index}>
                  <NavLink to={item.url}>{item.display}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav__right">
            <button className="btn">
              <Link to="/wallet">
                <AccountBalanceWalletOutlinedIcon /> Connect Wallet
              </Link>
            </button>

            <span className="mobile__menu">
              <MenuOutlinedIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
