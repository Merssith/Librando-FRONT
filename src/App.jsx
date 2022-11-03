import React from "react";
import Home from "./components/Home";
import Content from "./components/Content.jsx"
import { Route, Routes } from "react-router";



const App = () => {
  return (
    <div>
      <div>Hola</div>
      <Home />
      <Routes>
      <Route path="/book" element={<Content />} />
      </Routes>
    </div>
  );
};

export default App;

