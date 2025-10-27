import React, { useState } from "react";
import MapView from "./components/MapView";
import Controls from "./components/Controls";

function App() {
  const [party, setParty] = useState("Democrat");
  const [ports, setPorts] = useState(null);

  return (
    <div className="flex flex-col h-screen">
      <Controls setParty={setParty} setPorts={setPorts} />
      <MapView ports={ports} />
    </div>
  );
}

export default App;