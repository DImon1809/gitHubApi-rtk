import { FC } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import SearchPage from "./pages/search-page/SearchPage";
import FavoritesPage from "./pages/favorites-page/FavoritesPage";
import ErrorPage from "./pages/error/ErrorPage";

import "./App.scss";

const App: FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
