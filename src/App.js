import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import BadHealth from "./Pages/BadHealth";
// import GoodHealth from "./Pages/GoodHealth";
import HealthStatus1 from "./Pages/HealthStatus1";
function App() {
  return (
    <div style={{ marginLeft: "20px" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/health-api/:id" element={<HealthStatus1 />} />
          {/* <Route path="/health-api/2" element={<GoodHealth />} />
          <Route path="/health-api/3" element={<GoodHealth />} /> */}
          {/* <Route path="*" element={<BadHealth />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
