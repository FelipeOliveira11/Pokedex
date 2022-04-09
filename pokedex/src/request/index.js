export const getPokemons = async () => {
  const response = await fetch(process.env.REACT_APP_API_POKEMONS);
  const data = response.json();
  return data;
};
