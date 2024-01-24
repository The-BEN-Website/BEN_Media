import { lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const Teachings = lazy(() => import("./pages/Teachings"));
const Teaching = lazy(() => import("./pages/Teachings/TeachingViews"));
const Songs = lazy(() => import("./pages/Songs"));
const Gallery = lazy(() => import("./pages/Gallery"));
const GalleryViews = lazy(() => import("./pages/Gallery/GalleryView"));
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
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: `/gallery/:id`,
    element: <GalleryViews />,
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
    element: <Teaching />,
  },
  {
    path: "*",
    element: <div>Not found</div>,
  },
];

export default AppRoutes;
