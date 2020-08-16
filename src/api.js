const pokeApiUrl = "https://pokeapi.co/api/v2";

export const getBerry = (berry) => {
  return fetch(`${pokeApiUrl}/berry/${berry}`, { method: "GET" }).then(
    (resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw Error(resp.statusText);
      }
    }
  );
};

export const getItem = (item) => {
  return fetch(`${pokeApiUrl}/item/${item}`, { method: "GET" }).then((resp) => {
    if (resp.ok) {
      return resp.json();
    } else {
      throw Error(resp.statusText);
    }
  });
};

export const getLocation = (item) => {
  return fetch(`${pokeApiUrl}/location/${item}`, {
    method: "GET",
  }).then((resp) => {
    if (resp.ok) {
      return resp.json();
    } else {
      throw Error(resp.statusText);
    }
  });
};
