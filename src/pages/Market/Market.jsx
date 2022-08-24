import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import NftCard from "../../components/NftCard";
import "./Market.css";

import { NFT__DATA } from "../../assests/data/data";

const Market = () => {
  const [data, setData] = useState(NFT__DATA);

  const handleSort = (e) => {

    const filterValue = e.target.value

    if(filterValue === 'high'){
      const filterData = NFT__DATA.filter(item => item.currentBid > 6)

      setData(filterData)
    }

    if(filterValue === 'mid'){
      const filterData = NFT__DATA.filter(item => item.currentBid > 2 && item.currentBid < 6)

      setData(filterData)
    }

    if(filterValue === 'low'){
      const filterData = NFT__DATA.filter(item => item.currentBid < 2)

      setData(filterData)
    }

  }

  return (
    <div>
      <Header />

      <div className="market__banner">
        <h1>NFT Market</h1>
      </div>

      <p className="market__description">Explore the hottest new Non-fungible tokens on DeFi's marketplace</p>

      <div className="container">
        <div className="row">
          <select
            id="filter"
            defaultValue="DEFAULT"
            onChange={handleSort}
          >
            <option value="DEFAULT" disabled>
              Sort
            </option>
            <option value="high">Price: Higher</option>
            <option value="mid">Price: Middle</option>
            <option value="low">Price: Lower</option>
          </select>
          <div className="nft__list">
            {data?.map((props) => (
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
