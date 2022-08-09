import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CloudRequest from "./components/CloudRequest/CloudRequest";

import Home from "./components/Home/Home";
import Login from "./shared/Login/Login";

function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cloud" element={<CloudRequest />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
