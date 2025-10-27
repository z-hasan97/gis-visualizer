import React, { useEffect, useRef } from "react";
import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";

const MapViewComponent = ({ ports }) => {
  const mapDiv = useRef(null);

  useEffect(() => {
    if (!mapDiv.current) return;

    const map = new Map({ basemap: "streets-navigation-vector" });
    const view = new MapView({
      container: mapDiv.current,
      map,
      center: [-98.5795, 39.8283],
      zoom: 4,
    });

    if (ports) {
      const blob = new Blob([JSON.stringify(ports)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const geoLayer = new GeoJSONLayer({ url });
      map.add(geoLayer);
    }

    return () => view.destroy();
  }, [ports]);

  return <div ref={mapDiv} style={{ height: "100%", width: "100%" }} />;
};

export default MapViewComponent;