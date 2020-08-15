const pokeApiUrl = "https://pokeapi.co/api/v2";

export const getBerry = (berry) => {
  return fetch(`${pokeApiUrl}/berry/${berry}`, { method: "GET" }).then((resp) =>
    resp.json()
  );
};
