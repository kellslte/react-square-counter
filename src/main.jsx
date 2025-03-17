import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./pages/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "./components/Layouts/AppLayout.jsx";
import Jokes from "./pages/Jokes.jsx";
import Counters from "./pages/Counters.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={ <AppLayout /> } >
        <Route index element={<App />} />
        <Route path="jokes" element={<Jokes />} />
        <Route path="counters" element={<Counters />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
