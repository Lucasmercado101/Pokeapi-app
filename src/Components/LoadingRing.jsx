import React from "react";
import "./loadingRing.sass";

function LoadingRing({ centered, white }) {
  return (
    <div
      className={`lds-ring ${centered && "lds-ring--centered"} ${
        white && "lds-ring--white"
      }`}
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default LoadingRing;
