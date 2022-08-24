import './app.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import Crypto from './pages/Crypto/Crypto'
import Market from './pages/Market/Market';
import NftDetails from './pages/NFT details/NftDetails';
import Wallet from './pages/Wallet/Wallet';

function App() {
  return (
    <Router>
       <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crypto" element={<Crypto />} />
          <Route path='/market' element={<Market />} />
          <Route path='/market/:id' element={<NftDetails />} />
          <Route path='/wallet' element={<Wallet />} />
        </Routes>
    </div>
    </Router>
   
  );
}

export default App;
