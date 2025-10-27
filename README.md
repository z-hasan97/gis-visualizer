# gis-visualizer
Mini GIS Web Application for data fetching, spatial analysis, and visualization using ArcGIS API
# 🗺️ GIS Visualizer — Esri Bangladesh Assignment

## 🎯 Goal
A mini GIS web application built with **Node.js + React + ArcGIS Maps SDK** to:
- Fetch and process geospatial data from ArcGIS REST APIs  
- Perform spatial analysis (count ports by congressional party)  
- Display results on an interactive web map  

---

## 🚀 Features

| Component | Description |
|------------|--------------|
| 🧠 **Backend (Node.js + Express)** | Fetches ArcGIS REST API data, processes GeoJSON, and runs spatial analysis using **Turf.js** |
| 💻 **Frontend (React + Vite)** | Displays an interactive **ArcGIS Map**, filter controls, and dynamic data rendering |
| 📊 **Spatial Analysis** | Counts U.S. principal ports by the ruling **Congressional party** (Democrat / Republican) |
| 🎨 **Bonus** | Ports symbolized by their `Domestic_Tons` attribute |

---

## 🧩 Tech Stack
- **Backend:** Node.js, Express.js, Axios, Turf.js  
- **Frontend:** React, Vite, ArcGIS Maps SDK for JavaScript  
- **Language:** JavaScript (ESM)  
- **APIs Used:**
  - [US Principal Ports](https://services7.arcgis.com/n1YM8pTrFmm7L4hs/ArcGIS/rest/services/Principal_Ports/FeatureServer/)
  - [USA 119th Congressional Districts](https://services.arcgis.com/P3ePLMYs2RVChkJx/ArcGIS/rest/services/USA_119th_Congressional_Districts/FeatureServer/)

---

## ⚙️ Project Structure
