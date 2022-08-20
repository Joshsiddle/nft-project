import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import heroImg from "../assests/images/hero.png";

function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__left">
          <h3>DeFi MARKET</h3>
          <h1>Create, sell and collect digital items.</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem eaque
            nostrum consectetur. Voluptate odit modi unde. Earum magni cumque
            labore tempora debitis ipsa. Eaque quaerat tempore quis aspernatur!
            Aut, molestias?
          </p>
          <button className="btn explore__btn">
            <Link to="/Market">Explore</Link>
          </button>
        </div>
        <div className="hero__right">
          <img src={heroImg} alt="" className="hero__img" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
