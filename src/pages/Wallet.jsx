import React from "react";
import CurrencyBitcoinOutlinedIcon from "@mui/icons-material/CurrencyBitcoinOutlined";
import "./wallet.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TollIcon from "@mui/icons-material/Toll";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import BugReportIcon from "@mui/icons-material/BugReport";

const Wallet = () => {
  return (
    <div>
      <Header />
      <div className="wallet__banner">
        <h1 className="wallet__title">Wallet</h1>
      </div>
      <div className="container">
        <div className="row wallet-row">
          <h2 className="wallet__subtitle">Connect your wallet</h2>
          <p className="wallet__para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            quis ea optio facere minus.
          </p>

          <div className="wallet__options">
            <div className="box">
              <CurrencyBitcoinOutlinedIcon
                style={{ fontSize: "48", color: "white" }}
              />
              <h3 className="box__title">Coinbase</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, sapiente omnis cum id odit quibusdam eaque molestiae
                maxime ex nostrum error soluta deleniti officiis officia animi,
                ratione perspiciatis quia commodi.
              </p>
            </div>
            <div className="box">
              <TollIcon style={{ fontSize: "48", color: "white" }} />
              <h3 className="box__title">Coinbase</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, sapiente omnis cum id odit quibusdam eaque molestiae
                maxime ex nostrum error soluta deleniti officiis officia animi,
                ratione perspiciatis quia commodi.
              </p>
            </div>
            <div className="box">
              <HealthAndSafetyIcon style={{ fontSize: "48", color: "white" }} />
              <h3 className="box__title">Coinbase</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, sapiente omnis cum id odit quibusdam eaque molestiae
                maxime ex nostrum error soluta deleniti officiis officia animi,
                ratione perspiciatis quia commodi.
              </p>
            </div>
            <div className="box">
              <BugReportIcon style={{ fontSize: "48", color: "white" }} />
              <h3 className="box__title">Coinbase</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, sapiente omnis cum id odit quibusdam eaque molestiae
                maxime ex nostrum error soluta deleniti officiis officia animi,
                ratione perspiciatis quia commodi.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Wallet;
