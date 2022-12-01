import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
