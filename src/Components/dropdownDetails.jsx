import React from "react";
import "./dropdownDetails.sass";

function DropdownDetails({ children, title }) {
  function uuidv4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (
      c
    ) {
      var r = (Math.random() * 16) | 0,
        v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
  const uuid = uuidv4();

  return (
    <div className="dropdown">
      <label className="dropdown__label" htmlFor={`dropdown__${uuid}`}>
        {title}
      </label>
      <input
        type="checkbox"
        id={`dropdown__${uuid}`}
        className="dropdown__checkbox"
      ></input>
      {children}
    </div>
  );
}

export default DropdownDetails;
