import React, { useEffect, useState } from "react";
import { getLocation } from "../../api";
import TableData from "../../Components/tableData";
import DropdownDetails from "../../Components/dropdownDetails";

function Location(props) {
  const [locationData, setLocationData] = useState({});

  useEffect(() => {
    getLocation(props.match.params.location)
      .then((data) => {
        setLocationData(data);
      })
      .catch((err) => {
        alert(err);
      });
    return () => setLocationData({});
  }, [props.match.params.location]);

  return (
    <article>
      {Object.keys(locationData).length > 0 && (
        <>
          <TableData title={locationData.name}>
            <tr>
              <th>Region</th>
              <td>{locationData.region.name}</td>
            </tr>
            {locationData.areas.length > 0 && (
              <tr>
                <th>Areas</th>
                <td>
                  <ul style={{ listStyle: "none" }}>
                    {locationData.areas.map((area, i) => (
                      <li key={i}>{area.name.split("-").join(" ")}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            )}
            <tr>
              <td colSpan="2">
                <section>
                  <DropdownDetails title="Game indices">
                    <ul>
                      {locationData.game_indices.map((index, i) => (
                        <li key={i}>{index.game_index}</li>
                      ))}
                    </ul>
                  </DropdownDetails>
                </section>
              </td>
            </tr>
          </TableData>
        </>
      )}
    </article>
  );
}

export default Location;
