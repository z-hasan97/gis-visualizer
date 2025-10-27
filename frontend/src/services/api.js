export const getFilteredPorts = async (party) => {
  const res = await fetch(`http://localhost:5000/api/gis/count?party=${party}`);
  return await res.json();
};