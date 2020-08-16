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
  }, [props.match.params.item]);

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
            <tr>
              <td colSpan="2">
                <img src={itemData.sprites.default} alt={itemData.name} />
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Cost</th>
              <td>{itemData.cost}</td>
            </tr>
            <tr>
              <th>Category</th>
              <td>{itemData.category.name.split("-").join(" ")}</td>
            </tr>
            <tr>
              <th>Attributes</th>
              <td>
                <ul className="itemAttributes">
                  {itemData.attributes.map((item, i) => (
                    <li key={i}>{item.name}</li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr>
              <th>Effect</th>
              <td>{itemData.effect_entries[0].short_effect}</td>
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
