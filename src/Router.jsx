import { lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const Teachings = lazy(() => import("./pages/Teachings"));
const Songs = lazy(() => import("./pages/Songs"));
const News = lazy(() => import("./pages/News"));
const Contact = lazy(() => import("./pages/Contact"));


const AppRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/teachings",
    element: <Teachings />,
  },
  {
    path: "/songs",
    element: <Songs />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: `/teachings/:id`,
    element: <Teachings />,
  },
  {
    path: "*",
    element: <div>Not found</div>,
  },
];

export default AppRoutes;
