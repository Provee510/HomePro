import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Listing from "./Pages/Listing";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import LoginPage from "./components/Login";
import { ModalProvider } from "./contexts/ModalContext";
import RegisterModal from "./components/RegisterPage";

const App = () => {
  return (
    <ModalProvider>
      <BrowserRouter>
        <Nav />
        <RegisterModal/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/listings" element={<Listing />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </ModalProvider>
  );
};

export default App;
