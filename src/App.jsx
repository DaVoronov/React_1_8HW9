import { Routes, Route } from "react-router-dom";

import HomeLayout from "./layouts/HomeLayout";

import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";

function App() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Route>
    </Routes>
  );
}

export default App;
