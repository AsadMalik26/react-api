import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopMenu from "./components/TopMenu";
import LandingPage from "./components/LandingPage";
import ContactUs from "./components/ContactUs";
import PageNotFound from "./components/NotFound";
import Products from "./components/products/Products";
//Router handling
// Wrap full application in Router
//Switch - used to tell the path and load component against the path
function App() {
  return (
    <Router>
      <div>
        <TopMenu />
        <h1>XYZ Shop</h1>
        <div style={{ paddingLeft: "20px" }}>
          <Routes>
            {/* old method - above: Switch instead of Routes- below: component instead of element */}
            {/* <Route path="/" component={<LandingPage />} /> */}
            <Route path="/products" element={<Products />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
