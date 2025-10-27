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

## ⚙️ Setup & Run Instructions

### 🧠 Backend
```bash
cd backend
npm install
npm start
Backend runs at 👉 http://localhost:5000

💻 Frontend
bash
Copy code
cd frontend
npm install
npm run dev
Frontend runs at 👉 http://localhost:5173

⚠️ Make sure both servers are running simultaneously.

🧠 How It Works
Fetches data from ArcGIS REST APIs (FeatureServer → GeoJSON)

Transforms response into GeoJSON

Uses Turf.js to perform spatial containment checks (booleanPointInPolygon)

Counts the number of ports by Congressional Party

Visualizes the resulting GeoJSON on an interactive ArcGIS map

📊 Example Output
API Response Example:

json
Copy code
{
  "Democrat": 134,
  "Republican": 98
}
🖥️ User Interface Flow
Select ruling party from the dropdown (Democrat / Republican)

Click “Filter”

Backend performs spatial analysis and returns results

Map updates dynamically with colored port symbols

🧾 Environment Variables
/backend/.env.example
ini
Copy code
PORT=5000
/frontend/.env.example
ini
Copy code
VITE_API_URL=http://localhost:5000
🧱 Docker (Optional)
If you wish to containerize the app:

bash
Copy code
docker build -t gis-visualizer .
docker run -p 5000:5000 gis-visualizer
📸 Screenshots
Map View	Filter Functionality

(Replace placeholders with your actual screenshots before submission.)

🏁 Deliverables Checklist
✅ Source code (Node + React)
✅ .env.example files
✅ README.md with setup guide
✅ Public GitHub repository
✅ Dockerfile (optional)

👨‍💻 Author
Md Zahid Hasan
📍 GIS Developer — Assignment Submission
📅 27 October 2025
🔗 GitHub: @z-hasan97



