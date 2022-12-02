import { Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home/Home";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      {/* ToastContainer is the place will the notifications Upper */}
      <ToastContainer />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
