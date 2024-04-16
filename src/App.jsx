import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import LandingPage from "./pages/LandingPage/LandingPage";
import ActivitiesPage from "./pages/ActivitiesPage/ActivitiesPage";
import LocationsPage from "./pages/LocationsPage/LocationsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="styling-div">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/activities" element={<ActivitiesPage />} />
            <Route path="/locations" element={<LocationsPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
