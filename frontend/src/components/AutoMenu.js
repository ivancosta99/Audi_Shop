import React from "react";
import "./AutoMenu.css";

const AutoMemu = ({filterAuto, autoItems}) => {
  return (
      <>
        {
          autoItems.map((curClem, index) => {
            return <button className = "btn__auto"  key = {index} onClick = {() => filterAuto(curClem)}>{curClem}</button>
          })
        }
      </>
  )
}

export default AutoMemu;