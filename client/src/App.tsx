import React, { FC } from "react";
import styled from "@emotion/styled";
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

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
