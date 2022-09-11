import React from "react";
import { Link } from 'react-router-dom'

export const Polozky = ({polozka}) => {
    return (
      <>
        {polozka.map((polozkaSeznamu) => (
        <Link to="/product" >
        <div key={polozkaSeznamu.id}>
          <img src={polozkaSeznamu.image}></img>
          <h2>{polozkaSeznamu.name}</h2>
        </div>
        </Link>))}
      </>
    )
  }