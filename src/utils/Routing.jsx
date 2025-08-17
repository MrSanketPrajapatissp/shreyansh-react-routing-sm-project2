import React from "react";
import Form3 from "../components/Form3.jsx";
import { Routes, Route, Link } from "react-router-dom";
import About from "../components/About.jsx";
import Contact from "../components/Contact.jsx";
import Home from "../components/Home.jsx";
import User from "../components/User.jsx";
import UserDetail from "../components/UserDetail.jsx";

function routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/register" element={<Form3 />} />
        <Route path="/user" element={<User />}>
          <Route path="/user/:name" element={<UserDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default routing;
