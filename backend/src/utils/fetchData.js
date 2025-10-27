import axios from "axios";

const PORTS_URL =
  "https://services7.arcgis.com/n1YM8pTrFmm7L4hs/ArcGIS/rest/services/Principal_Ports/FeatureServer/0/query?where=1%3D1&outFields=*&f=geojson";

const CONGRESS_URL =
  "https://services.arcgis.com/P3ePLMYs2RVChkJx/ArcGIS/rest/services/USA_119th_Congressional_Districts/FeatureServer/0/query?where=1%3D1&outFields=*&f=geojson";

export const fetchPortsData = async () => {
  const response = await axios.get(PORTS_URL);
  return response.data;
};

export const fetchCongressData = async () => {
  const response = await axios.get(CONGRESS_URL);
  return response.data;
};