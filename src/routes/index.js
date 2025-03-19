import Home from "../pages/Home.jsx";
import AppLayout from "../components/Layouts/AppLayout.jsx";
import Jokes from "../pages/Jokes.jsx";
import Counters from "../pages/Counters.jsx";
import Blog from "../pages/blog/Index.jsx";
import Post from "../pages/blog/Post.jsx";

export const routes = [
  {
    path: "/",
    layout: () => {
      return <AppLayout />;
    },
    children: [
      {
        path: "/",
        element: () => <Home />,
      },
      {
        path: "jokes",
        element: () => <Jokes />,
      },
      {
        path: "counters",
        element: () => <Counters />,
      },
    ],
  },
  {
    path: "blog",
    layout: () => {
      return <AppLayout />;
    },
    children: [
      {
        path: "/",
        element: () => <Blog />,
      },
      {
        path: "post/:id",
        element: () => <Post />,
      },
    ],
  },
];
