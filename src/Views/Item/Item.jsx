import React, { useEffect, useState } from "react";
import { getItem } from "../../api";
import LoadingRing from "../../Components/LoadingRing";
import "./item.sass";

function Item(props) {
  const [itemData, setItemData] = useState({});

  const capitalizeFirstLetter = (string) =>
    string.replace(/^\w/, (c) => c.toUpperCase());

  useEffect(() => {
    getItem(props.match.params.item).then((data) => {
      setItemData(data);
    });
  }, []);

  return (
    <article className="item">
      {Object.keys(itemData).length > 0 ? (
        <table>
          <thead>
            <tr>
              <td className="itemName" colSpan="2">
                {capitalizeFirstLetter(itemData.name).split("-").join(" ")}
              </td>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
          <th>Firmness</th>
          <td>{itemData.firmness.name}</td>
        </tr> */}
            {/* <tr>
          <th>Flavors</th>
          <td>
            <ul className="berryFlavors">
              {itemData.flavors.map((item, i) => (
                <li key={i}>{item.flavor.name}</li>
              ))}
            </ul>
          </td>
        </tr> */}
            <tr>
              {/* <th>Natural gift type</th>
          <td>{itemData.natural_gift_type.name}</td> */}
            </tr>
          </tbody>
        </table>
      ) : (
        <LoadingRing centered white />
      )}
    </article>
  );
}

export default Item;
