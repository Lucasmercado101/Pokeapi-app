import React from "react";
import "./tableData.sass";

function tableData({ title, image, children }) {
  const capitalizeFirstLetter = (string) =>
    string.replace(/^\w/, (c) => c.toUpperCase());

  return (
    <table className="table">
      <thead>
        <tr>
          <td colSpan="2" className="tableTitle">
            {capitalizeFirstLetter(title.split("-").join(" "))}
          </td>
        </tr>
        {image && (
          <tr>
            <td colSpan="2">
              <img alt={title} src={image} />
            </td>
          </tr>
        )}
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}

export default tableData;
