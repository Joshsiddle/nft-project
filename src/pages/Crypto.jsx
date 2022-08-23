import React, { useState, useEffect } from "react";
import axios from "axios";
import Coin from "../components/Coin";
import "./Crypto.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Crypto() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => alert("Somthing went wrong :("));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Header />

      <div className="crypto__banner">
        <h1>Cryptocurrencies</h1>
      </div>

      <p className="crypto__description">Browse the top 100 Cryptocurrencies throught our live price tracker</p>

      <div className="coin-app">
        <div className="coin-search">
          <h1 className="coin-text">Search a currency</h1>
          <form action="">
            <input
              type="text"
              placeholder="Search"
              className="coin-input"
              onChange={handleChange}
            />
          </form>
        </div>
        {filteredCoins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              marketcap={coin.market_cap}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
              volume={coin.total_volume}
            />
          );
        })}
      </div>

      <div className="padding">
        
      </div>

      <Footer />
    </div>
  );
}

export default Crypto;
