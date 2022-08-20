import './app.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Crypto from './pages/Crypto'

function App() {
  return (
    <Router>
       <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crypto" element={<Crypto />} />
        </Routes>
    </div>
    </Router>
   
  );
}

export default App;
