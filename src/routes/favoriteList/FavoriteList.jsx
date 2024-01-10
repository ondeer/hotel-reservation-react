import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setHotelData } from "../../store/hotelData";

import data from "../../data/hotels.json";

import FavoriteCard from "../../components/favoriteCard/FavoriteCard";
import EmptyCard from "../../components/emptyCard/EmptyCard";

import classes from "./FavoriteList.module.css";

const FavoritesList = () => {
  const dispatch = useDispatch();
  const hotelData = useSelector((state) => state.hotelData.hotelData);

  const favoritesList = JSON.parse(localStorage.getItem("favorites")) || [];

  const filteredData = data.filter((filterItem) =>
    favoritesList.includes(filterItem.id)
  );
  useEffect(() => {
    dispatch(setHotelData(filteredData));
  }, []);

  return (
    <main className={classes.favoriteList}>
      <h2>Favorilerim</h2>
      {hotelData.length > 0 ? (
        <>
          <div className={classes.favoriteListHotel}>
            {hotelData.map((hotelDataItem) => (
              <FavoriteCard key={hotelDataItem.id} hotelData={hotelDataItem} />
            ))}
          </div>
        </>
      ) : (
        <EmptyCard
          emptyContent={"Favorilerim listenizde hotel bulunmamaktadır"}
        />
      )}
    </main>
  );
};

export default FavoritesList;
