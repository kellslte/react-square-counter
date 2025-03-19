import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./pages/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "./components/Layouts/AppLayout.jsx";
import Jokes from "./pages/Jokes.jsx";
import Counters from "./pages/Counters.jsx";
import Blog from "./pages/blog/Index.jsx";
import Post from "./pages/blog/Post.jsx";
import BlogProvider from "./providers/BlogProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BlogProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<App />} />
            <Route path="jokes" element={<Jokes />} />
            <Route path="counters" element={<Counters />} />
            <Route path="blog">
              <Route index element={<Blog />} />
              <Route path="post/:id" element={<Post />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </BlogProvider>
  </StrictMode>
);
