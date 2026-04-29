import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import ProductCatalog from './pages/ProductCatalog'; // Import your new page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* The main landing page */}
        <Route path="/" element={<Home />} />

        {/* The dedicated catalog page */}
        <Route path="/productcatalog" element={<ProductCatalog />} />

        {/* Fallback: redirect unknown routes to home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;