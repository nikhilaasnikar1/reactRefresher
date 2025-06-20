import React from "react";
import { createRoot } from "react-dom/client";
import Heading from "./components/Heading";
import Body from "./components/Body";
import Mui from "./components/Mui";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import AboutUs from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
  return (
    <div className="app">
      <Heading />
      <Outlet />
      {/* <Mui /> */}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
