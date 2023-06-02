import "./styles/theme.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Index";
import React from "react";

export function App() {
  return (
    <div className="l">
      {" "}
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

// export default App;
