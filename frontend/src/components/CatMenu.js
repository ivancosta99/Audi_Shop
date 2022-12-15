import React from "react";
import "./CatMenu.css";

const CatMemu = ({filterMenu, catItems}) => {
  return (
      <>
        {
          catItems.map((curClem, index) => {
            return <button className = "btn"  key = {index} onClick = {() => filterMenu(curClem)}>{curClem}</button>
          })
        }
      </>
  )
}

export default CatMemu;