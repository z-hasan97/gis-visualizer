import * as turf from "@turf/turf";
import { fetchPortsData, fetchCongressData } from "../utils/fetchData.js";

export const countPortsByParty = async () => {
  const ports = await fetchPortsData();
  const districts = await fetchCongressData();
  let counts = { Democrat: 0, Republican: 0 };

  for (const port of ports.features) {
    for (const district of districts.features) {
      if (turf.booleanPointInPolygon(port, district)) {
        const party = district.properties.PARTY;
        if (party === "Democrat" || party === "Republican") counts[party]++;
        break;
      }
    }
  }
  return counts;
};