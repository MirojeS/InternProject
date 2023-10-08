import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './Promotion.css';

import AllPromotions from './AllPromotions';
import NewCustomersPromotions from './NewCostumersPromotions';

function App() {
  const [activeButton, setActiveButton] = useState('all');
  const handleButtonClick = (button) => {
    setActiveButton(button);
  };
  

  return (
    <Router>
      <div className='container'>
        <nav className="nav-container">
        <Link
  className={`nav-button ${activeButton === 'all' ? 'active' : ''}`}
  to="/"
  onClick={() => handleButtonClick('all')}
>
  All Promotions
</Link>
<Link
  className={`nav-button ${activeButton === 'new' ? 'active' : ''}`}
  to="/new-customers"
  onClick={() => handleButtonClick('new')}
>
  New Customers
</Link>

        </nav>

        <Routes>
          <Route path="/new-customers" element={<NewCustomersPromotions />} />
          <Route path="/" element={<AllPromotions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
