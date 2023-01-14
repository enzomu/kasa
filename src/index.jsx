import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Singleproduct from "./pages/Singleproduct";
import Error from "./pages/Error";

import Header from "./components/Header";
import Footer from "./components/Footer.jsx";

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route index element={<Home />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="products/:productId" element={<Singleproduct />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);


reportWebVitals();
