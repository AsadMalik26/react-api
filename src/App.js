import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopMenu from "./components/TopMenu";
import LandingPage from "./components/LandingPage";
import Product from "./components/products/Product";
import ContactUs from "./components/ContactUs";
import PageNotFound from "./components/NotFound";
//Router handling
// Wrap full application in Router
//Switch - used to tell the path and load component against the path
function App() {
  return (
    <Router>
      <div>
        <h1>
          <TopMenu />
          XYZ Shop
        </h1>
        <Routes>
          {/* old method - above: Switch instead of Routes- below: component instead of element */}
          {/* <Route path="/" component={<LandingPage />} /> */}
          <Route path="/product" element={<Product />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
