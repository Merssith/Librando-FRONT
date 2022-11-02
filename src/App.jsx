import React from "react";
import Home from "./components/Home";
import Grid from "./commons/Grid";
import { Route, Routes } from "react-router";

const App = () => {
  return (
    <div>
      <div>Hola</div>
      <Home />
      <Routes>
        <Route path=":type" element={<Grid />} />
      </Routes>
    </div>
  );
};

export default App;
