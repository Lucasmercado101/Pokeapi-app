import React, { useEffect, useState } from "react";
import "./berry.sass";
import { getBerry } from "../../api";

function Berry(props) {
  const [berryData, setBerryData] = useState({});

  useEffect(() => {
    getBerry(props.match.params.berry).then((data) => {
      setBerryData(data);
      console.log(data);
    });
    return () => setBerryData({});
  }, [props.match.params.berry]);

  return (
    <article className="berry">
      {Object.keys(berryData).length > 0 && (
        <table>
          <thead>
            <tr>
              <td className="berryName" colSpan="2">
                {berryData.name}
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Firmness</th>
              <td>{berryData.firmness.name}</td>
            </tr>
            <tr>
              <th>Flavors</th>
              <td>
                <ul className="berryFlavors">
                  {berryData.flavors.map((item, i) => (
                    <li key={i}>{item.flavor.name}</li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr>
              <th>Growth Time</th>
              <td>{berryData.groth_time}</td>
            </tr>
            <tr>
              <th>Size</th>
              <td>{berryData.size}mm</td>
            </tr>
            <tr>
              <th>Smoothness</th>
              <td>{berryData.smoothness}</td>
            </tr>
            <tr>
              <th>Soil Dryness</th>
              <td>{berryData.soil_dryness}</td>
            </tr>
            <tr>
              <th>Maximum amount harvestable</th>
              <td>{berryData.max_harvest}</td>
            </tr>
            <tr>
              <th>Natural gift power</th>
              <td>{berryData.natural_gift_power}</td>
            </tr>
            <tr>
              <th>Natural gift type</th>
              <td>{berryData.natural_gift_type.name}</td>
            </tr>
          </tbody>
        </table>
      )}
    </article>
  );
}

export default Berry;
