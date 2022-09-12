import React from "react";
import { Link } from "react-router-dom";

export const Polozky = ({produkt}) => {
  
    return (
      <>
        {produkt.map((polozkaSeznamu) => (
        <Link to={`/product/${polozkaSeznamu.id}`} key={polozkaSeznamu.id} idparam={polozkaSeznamu.id}>
        <div key={polozkaSeznamu.id}>
          <img src={polozkaSeznamu.image}></img>
          <h2>{polozkaSeznamu.name}</h2>
        </div>
        </Link>))}
      </>
    )
  }