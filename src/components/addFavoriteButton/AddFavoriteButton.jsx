import React, { useState, useEffect } from "react";

import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import classes from "./AddFavoriteButton.module.css";

const AddFavoriteButton = ({ hotelDataIds }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddFavorite = () => {
    const favoritesList = JSON.parse(localStorage.getItem("favorites")) || [];

    if (isFavorite) {
      const newFavoriteList = favoritesList.filter(
        (favoriteItemId) => favoriteItemId !== hotelDataIds
      );
      localStorage.setItem("favorites", JSON.stringify(newFavoriteList));
      setIsFavorite(false);
    } else {
      localStorage.setItem("favorites",JSON.stringify([...favoritesList, hotelDataIds])
      );
      setIsFavorite(true);
    }
  };

  useEffect(() => {
    const favoritesList = JSON.parse(localStorage.getItem("favorites")) || [];
    favoritesList.map((item) => {
      item === hotelDataIds && setIsFavorite(true);
    });
  }, []);

  return (
    <button className={classes.favIcon} onClick={handleAddFavorite}>
      {isFavorite ? (
        <MdFavorite className={classes.favIconFillRed} />
      ) : (
        <MdFavoriteBorder className={classes.favIconFillEmpty} />
      )}
    </button>
  );
};
export default AddFavoriteButton;
