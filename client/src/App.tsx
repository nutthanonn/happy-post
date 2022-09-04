import React, { FC } from "react";
import Home from "./pages/Home";
import Post from "./pages/Post";
import { Routes, Route } from "react-router-dom";

const App: FC = () => {
  return (
    <Routes>
      <Route element={<Home />} path="" />
      <Route element={<Post />} path="/post" />
    </Routes>
  );
};

export default App;
