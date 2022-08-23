import './app.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Crypto from './pages/Crypto'
import Market from './pages/Market';
import NftDetails from './pages/NftDetails';
import Wallet from './pages/Wallet';

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
