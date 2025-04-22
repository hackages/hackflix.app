import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { movies, categories } from "./mocks";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App movies={movies} categories={categories} />
  </StrictMode>
);
