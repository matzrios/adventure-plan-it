import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import LandingPage from "./pages/LandingPage/LandingPage";
import ActivitiesPage from "./pages/ActivitiesPage/ActivitiesPage";
import LocationsPage from "./pages/LocationsPage/LocationsPage";
import LocationDetail from "./pages/LocationDetail/LocationDetail";
import DubaiPage from "./pages/DubaiPage/DubaiPage";
import HongKongPage from "./pages/HongKongPage/HongKongPage";
import NisekoPage from "./pages/NisekoPage/NisekoPage";
import PortlandPage from "./pages/PortlandPage/PortlandPage";
import SingaporePage from "./pages/SingaporePage/SingaporePage";
import VancouverPage from "./pages/VancouverPage/VancouverPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="styling-div">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/activities" element={<ActivitiesPage />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/locationdetail" element={<LocationDetail />} />
            <Route path="/dubai" element={<DubaiPage />} />
            <Route path="/hongkong" element={<HongKongPage />} />
            <Route path="/niseko" element={<NisekoPage />} />
            <Route path="/portland" element={<PortlandPage />} />
            <Route path="/singapore" element={<SingaporePage />} />
            <Route path="/vancouver" element={<VancouverPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
