import { useSelector, useDispatch } from "react-redux";

import { setHotelData } from '../../store/hotelData';

import Card from "../card/Card";
import AddFavoriteButton from "../addFavoriteButton/AddFavoriteButton";

import classes from "./FavoriteCard.module.css";

const FavoriteCard = ({ hotelData}) => {
  const { id, name, image, price, location } = hotelData;

  const dispatch = useDispatch();
  const allData = useSelector((state) => state.hotelData.hotelData)

  const handleFavoriteButton = () => {
    dispatch(setHotelData(allData.filter((filterItem) => filterItem.id !== hotelData.id)))
  };
  
  return (
    <Card className={classes.favoriteCard}>
      <div className={classes.favoriteImage}>
        <img src={image} />
      </div>
      <ul className={classes.favoriteCardInfo}>
        <li className={classes.favoriteCardName}>{name}</li>
        <li>{location}</li>
        <li>{price} TL</li>
      </ul>
      <div>
      </div>
      <div className={classes.favoriteHeart}  title="Favorilerimden Çıkar" onClick={handleFavoriteButton}><AddFavoriteButton hotelDataIds={hotelData.id}/></div>
    </Card>
  );
};

export default FavoriteCard;