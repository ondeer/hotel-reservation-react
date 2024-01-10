import { Link } from "react-router-dom";

import Card from "../card/Card";
import AddFavoriteButton from "../addFavoriteButton/AddFavoriteButton";
import LazyImage from "../lazyImage/LazyImage";

import classes from "./HotelCard.module.css";

const Hotel = ({ hotelData }) => {
  const { id, name, image, price, location } = hotelData;

  return (
    <Card className={classes.hotel}>
      <div className={classes.hotelImage}>
        <LazyImage src={image}/>
        <AddFavoriteButton hotelDataIds={id}/>
      </div>
      <ul className={classes.hotelInfo}>
        <li className={classes.hotelCardName}>{name}</li>
        <li>{location}</li>
        <li>{price} TL</li>
      </ul>
      <div>
      <Link to={`/hotel-detail/${id}`}><button>Hotel Detay</button></Link>
      </div>
    </Card>
  );
};

export default Hotel;