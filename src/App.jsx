import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import FavoritesList from "./routes/favoriteList/FavoriteList.jsx";
import HotelList from "./routes/hotelList/HotelList.jsx";
import HotelDetail from "./components/hotelDetail/HotelDetail.jsx";
import RootLayout from "./routes/RootLayout.jsx";
import PageNotFound from "./routes/pageNotFound/PageNotFound.jsx";

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
