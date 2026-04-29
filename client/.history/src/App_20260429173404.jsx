// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductCatalog from './pages/ProductCatalog';

function App() {
  return (
    <Router>
      <Routes>
        {/* This is your landing page */}
        <Route path="/" element={<Home />} />

        {/* This is your new Catalog page */}
        <Route path="/productcatalog" element={<ProductCatalog />} />

        {/* This handles any typos and sends users back home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;