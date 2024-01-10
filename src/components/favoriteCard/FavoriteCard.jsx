import { useSelector, useDispatch } from "react-redux";

import { setHotelData } from '../../store/hotelData';

import Card from "../card/Card.jsx";
import AddFavoriteButton from "../addFavoriteButton/AddFavoriteButton.jsx";
import LazyImage from "../lazyImage/LazyImage.jsx";

import classes from "./FavoriteCard.module.css";

const FavoriteCard = ({ hotelData}) => {
  const { id, name, image, price, location } = hotelData;

  const dispatch = useDispatch();
  const allData = useSelector((state) => state.hotelData.hotelData)

  const handleFavoriteButton = () => {
    dispatch(setHotelData(allData.filter((filterItem) => filterItem.id !== id)))
  };
  
  return (
    <Card className={classes.favoriteCard}>
      <div className={classes.favoriteImage}>
        <LazyImage src={image} />
      </div>
      <ul className={classes.favoriteCardInfo}>
        <li className={classes.favoriteCardName}>{name}</li>
        <li>{location}</li>
        <li>{price} TL</li>
      </ul>
      <div>
      </div>
      <div className={classes.favoriteHeart}  title="Favorilerimden Çıkar" onClick={handleFavoriteButton}><AddFavoriteButton hotelDataIds={id}/></div>
    </Card>
  );
};

export default FavoriteCard;