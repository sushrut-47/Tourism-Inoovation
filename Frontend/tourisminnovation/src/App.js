import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import SearchResults from "./Pages/SearchResults/SearchResults";
import PackageDetails from "./Pages/PackageDetails/PackageDetails";
import Booking from "./Pages/Booking/Booking";
import TravelConnect from './Pages/TravelConnect/TravelConnect';
import MyTrips from './Pages/MyTrips/MyTrips';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/search" element={<SearchResults />} />

          <Route path="/package/:id" element={<PackageDetails />} />

          <Route path="/booking" element={<Booking />} />

          <Route
  path="/connect"
  element={<TravelConnect />}
/>

<Route
  path="/my-trips"
  element={<MyTrips />}
/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
