import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter, Routes, Route, Link, Navigate} from 'react-router-dom'
import './style.css';


const HomePage = ({produkt}) => {
  return (
    <>
      <h1>Aktuální nabídka</h1>
      <p>Nejnovějčí prémiové prodkty od předních českých designerů.</p>
      <p>Doprava zdarma až k vám domů, na cenu nehleďte.</p>
      {<Polozky polozka={produkt}/>}
    </>
  )
}

const Polozky = ({polozka}) => {
  return (
    <>
      {polozka.map((polozkaSeznamu) => (
      <div key={polozkaSeznamu.id} onClick={handleClick}>
        <img src={polozkaSeznamu.image}></img>
        <h2>{polozkaSeznamu.name}</h2>
      </div>))}
    </>
  )
}

const handleClick = (e) => {
  e.preventDefault()
  console.log("klikas na produkt")
  return (
    <>
    <Navigate to="/product" replace={true} />
    {console.log("jsem na produktove strance, ale nic se nedeje")}
    
    <h1>Tak co uz</h1>
    {ProductPage}
    </>
  )
}

const ProductPage = () => {
  return (
    <>
      <h2>Produktova stranka</h2>
    </>
  )
}




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