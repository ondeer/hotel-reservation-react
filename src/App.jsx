import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";


import FavoritesList from "./routes/favoriteList/favoriteList";
import HotelList from "./routes/hotelList/HotelList";
import HotelDetail from "./components/hotelDetail/HotelDetail";
import RootLayout from "./routes/RootLayout";
import PageNotFound from "./routes/pageNotFound/pageNotFound";

import "./App.css";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <HotelList />,
          children: [
            { path: "/hotel-detail/:hotelId", element: <HotelDetail /> },
          ],
        },
        { path: "/favorite", element: <FavoritesList /> },
        { path: "/*", element: <PageNotFound /> }
      ],
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
