import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BadHealth from "./Pages/BadHealth";
import GoodHealth from "./Pages/GoodHealth";
function App() {
  return (
    <div style={{ marginLeft: "20px" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/health" element={<GoodHealth />} />
          <Route path="*" element={<BadHealth />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
