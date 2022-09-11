import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import {
  Login,
  Models,
  Main,
  ModelType,
  Announs,
  Questions,
  Model,
} from "./pages";

function RouterApp() {
  return (
    <Routes>
      <Route index element={<Models />} />
      <Route path="/category/:id" element={<ModelType />} />
      <Route path="/model/:id" element={<Model />} />
      <Route path="/login" element={<Login />} />
      <Route element={<Layout />}>
        <Route path="main" element={<Main />} />
        <Route path="announs" element={<Announs />} />
        <Route path="questios" element={<Questions />} />
      </Route>
      <Route path="/*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default RouterApp;
