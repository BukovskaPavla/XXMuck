import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './style.css';
import { ProductPage } from './components/ProductPage';
import { HomePage } from './components/HomePage';

const App = () => {
  const [produkt, setProdukt] = useState([])
  

  useEffect(()=> {
    fetch(`https://apps.kodim.cz/react-2/xxxmuck/products`)
    .then((response) => response.json())
    .then((data) => setProdukt(data))
  },
  [])
    
  return (
   <>
    <BrowserRouter>
      <header>XXXMuck</header>
      <Routes>
          <Route path="/" element={<HomePage produkt={produkt} /> }/>
          <Route path="/product" element={<ProductPage /> }/>
      </Routes>
    </BrowserRouter>
    </>
  );
};


createRoot(
  document.querySelector('#app'),
).render(<App />);