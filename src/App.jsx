import React from "react";

// router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import HomePage from "./pages/HomePage";
import WomenPage from "./pages/WomenPage";
import MenPage from "./pages/MenPage";
import ShopAllPage from "./pages/ShopAllPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import ClothPage from "./pages/ClothPage";

// widgets
import NavbarWidget from "./widgets/NavbarWidget";
import FooterWidget from "./widgets/FooterWidget";

const App = () => {
  return (
    <BrowserRouter>
      <NavbarWidget />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/women" element={<WomenPage />} />
        <Route path="/men" element={<MenPage />} />
        <Route path="/shop_all" element={<ShopAllPage />} />
        <Route path="/about_us" element={<AboutUsPage />} />
        <Route path="/contact_us" element={<ContactPage />} />
        <Route path="/cloth" element={<ClothPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <FooterWidget />
    </BrowserRouter>
  );
};

export default App;
