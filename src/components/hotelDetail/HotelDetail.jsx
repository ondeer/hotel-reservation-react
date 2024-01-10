import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { MdPeople, MdLocationOn, MdClose } from "react-icons/md";

import { setHotelData } from "../../store/hotelData";

import data from "../../data/hotels.json";

import Modal from "../modal/Modal.jsx";
import LazyImage from "../lazyImage/LazyImage.jsx";

import classes from "./HotelDetail.module.css";

const HotelDetail = () => {
  let { hotelId } = useParams();

  const navigate = useNavigate();
  const handleCloseModal = () => {
    navigate("..");
  };

  const dispatch = useDispatch();
  const hotelData = useSelector((state) => state.hotelData.hotelData);

  if (hotelData.length === 0) {
    dispatch(setHotelData(data));
  }

  const findHotelDetailData = hotelData.find(
    (selectedHotel) => selectedHotel.id.toString() === hotelId
  );
  return (
    <>
      {findHotelDetailData && (
        <Modal className={classes.modal}>
            <MdClose className={classes.closeModal} onClick={handleCloseModal}/>
            <div className={classes.lazyImageRoot}>
              <LazyImage src={findHotelDetailData.image} />
            </div>
            <div className={classes.hotelDetailContent}>
              <div className={classes.hotelDetailInfo}>
                <h3>{findHotelDetailData.name}</h3>
                <span className={classes.description}>
                  {findHotelDetailData.description}
                </span>
                <p className={classes.contentFlex}>
                  <MdLocationOn /> <span>{findHotelDetailData.location}</span>
                </p>
                <span>{findHotelDetailData.price} TL</span>
              </div>
              {findHotelDetailData.rooms.length > 0 && (
                <>
                  <h3>Odanızı Seçiniz</h3>
                  <div className={classes.rooms}>
                    {findHotelDetailData.rooms.map((room) => (
                      <div key={room.id} className={classes.roomContent}>
                        <LazyImage src={findHotelDetailData.image} />
                        <ul className={classes.roomContentDetail}>
                          <li>{room.type}</li>
                          <li className={classes.contentFlex}>
                            <MdPeople /> <span>{room.capacity} Kişilik</span>
                          </li>
                          <li>{room.price} TL</li>
                        </ul>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
        </Modal>
      )}
    </>
  );
};

export default HotelDetail;
