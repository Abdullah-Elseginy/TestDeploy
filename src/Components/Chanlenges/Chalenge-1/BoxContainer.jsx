import React from "react";
import "../Chalenge-1/Chalenge.css";
import BoxOne from "./BoxOne";
import TallBox from "./TallBox";
function BoxContainer() {
  return (
    <div className="BoxesContainer">
      <div className="BoxOneContainer">
        <BoxOne />
        <BoxOne />
        <BoxOne />
        <BoxOne />
        <BoxOne />
      </div>
      <TallBox />
    </div>
  );
}

export default BoxContainer;
