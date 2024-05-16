import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Create from "./pages/Create";
import Read from "./pages/Read";
import Update from "./pages/Update";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Create />}></Route>
        <Route path="/all" element={<Read />}></Route>
        <Route path="/update" element={<Update />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
