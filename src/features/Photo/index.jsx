import React from "react";
import { Route, Routes, useLocation, useResolvedPath } from "react-router-dom";
import NotFound from "../../components/NotFound";
import AddEditPage from "./pages/AddEdit";
import MainPage from "./pages/Main";
import "./styles.scss";

const Photo = () => {
  const { pathname } = useLocation();
  console.log("pathname", pathname);
  const url = useResolvedPath("");
  console.log("url", url);
  return (
    <div className="photo-page">
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="add" element={<AddEditPage />} />
        <Route path=":photoId" element={<AddEditPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Photo;
