import React from "react"
import { useParams } from "react-router-dom"

export const ProductPage = ({produkt}) => {
  const { id } =useParams()

    return (
      <>   
        {produkt
          .filter((polozkaSeznamu) => polozkaSeznamu.id === id)
          .map((polozkaSeznamu) => (
            <div key={polozkaSeznamu.id}>
              <img src={polozkaSeznamu.image}></img>
              <h2>{polozkaSeznamu.name}</h2>
              <button>Objednat</button>
            </div>
        ))}
      </>
    )
}
