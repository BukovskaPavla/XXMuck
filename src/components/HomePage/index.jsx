import React from "react"
import { Polozky } from '../Polozky'

export const HomePage = ({produkt}) => {
    return (
      <>
        <h1>Aktuální nabídka</h1>
        <p>Nejnovějčí prémiové prodkty od předních českých designerů.</p>
        <p>Doprava zdarma až k vám domů, na cenu nehleďte.</p>
        {<Polozky polozka={produkt}/>}
      </>
    )
  }