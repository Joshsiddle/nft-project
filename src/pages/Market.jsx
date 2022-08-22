import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NftCard from "../components/NftCard";
import "./Market.css";

import { NFT__DATA } from "../assests/data/data";

const Market = ({ NFTs: initialNFTs }) => {
  const [NFTs, setNFTs] = useState(initialNFTs);

  function filterNFTs(filter) {
    if (filter === "LOW_TO_HIGH") {
      setNFTs(NFTs.slice().sort((a, b) => a.currentBid - b.currentPrice));
    }
    if (filter === "HIGH_TO_LOW") {
      setNFTs(NFTs.slice().sort((a, b) => b.currentBid - a.currentBid));
    }
  }

  return (
    <div>
      <Header />

      <div className="container">
        <div className="row">
          <select
            id="filter"
            defaultValue="DEFAULT"
            onChange={(event) => filterNFTs(event.target.value)}
          >
            <option value="DEFAULT" disabled>
              Sort
            </option>
            <option value="LOW_TO_HIGH">Price, Low to High</option>
            <option value="HIGH_TO_LOW">Price, High to Low</option>
          </select>
          <div className="nft__list">
            {NFT__DATA.map((props) => (
              <NftCard key={props.id} props={props} />
            ))}
          </div>
        </div>
      </div>
      <div className="padding"></div>
      <Footer />
    </div>
  );
};

export default Market;
