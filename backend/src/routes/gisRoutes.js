import express from "express";
import { fetchPortsData } from "../utils/fetchData.js";
import { countPortsByParty } from "../analysis/spatialAnalysis.js";

const router = express.Router();

router.get("/ports", async (req, res) => {
  try {
    const data = await fetchPortsData();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/count", async (req, res) => {
  try {
    const counts = await countPortsByParty();
    res.json(counts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;