import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

import { setHotelData } from "../../store/hotelData";

import data from "../../data/hotels.json";

import classes from "./HotelList.module.css";

import HotelCard from "../../components/hotelCard/HotelCard.jsx";
import EmptyCard from "../../components/emptyCard/EmptyCard.jsx";
import SearchBar from "../../components/searchBar/SearchBar.jsx";
import FilterBar from "../../components/filterBar/FilterBar.jsx";

const HotelList = () => {
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [inputText, setInputText] = useState("");
  const [uniqueLocations, setUniqueLocations] = useState([]);

  const dispatch = useDispatch();
  const hotelData = useSelector((state) => state.hotelData.hotelData);

  useEffect(() => {
    dispatch(setHotelData(data));

    setUniqueLocations(
      data.reduce((unique, hotel) => {
        return unique.some(
          (uniqueItem) => uniqueItem.location === hotel.location
        )
          ? unique
          : [...unique, hotel];
      }, [])
    );
  }, []);

  const inputHandler = (event) => {
    const searchQuery = event.target.value.toLowerCase();
    setInputText(searchQuery);
  };

  const handleLocationClick = (location) => {
    let updatedLocation;

    if (selectedLocation.includes(location)) {
      updatedLocation = selectedLocation.filter(
        (locationItem) => locationItem !== location
      );
    } else {
      updatedLocation = [location, ...selectedLocation];
    }
    setSelectedLocation(updatedLocation);
  };

  const handleClearFilter = () => {
    setInputText("");
    setSelectedLocation([]);
  };

  const filteredData = hotelData.filter((item) => {
    return (
      (item.name
        .toLocaleLowerCase("tr-TR")
        .includes(inputText.toLocaleLowerCase("tr-TR")) ||
        item.location
          .toLocaleLowerCase("tr-TR")
          .includes(inputText.toLocaleLowerCase("tr-TR"))) &&
      (selectedLocation.length === 0 ||
        selectedLocation.includes(item.location))
    );
  });

  return (
    <>
      <SearchBar inputText={inputText} onInputChange={inputHandler} />
      {uniqueLocations.length !== 1 && (
        <FilterBar
          uniqueLocations={uniqueLocations}
          selectedLocation={selectedLocation}
          onLocationClick={handleLocationClick}
        />
      )}
      <main className={filteredData.length !== 0 ? classes.hotelList : classes.emptyHotelList}>
        {filteredData.map((hotelDataItem) => (
          <HotelCard key={hotelDataItem.id} hotelData={hotelDataItem} />
        ))}
        {filteredData.length === 0 && (
          <>
            <EmptyCard
              emptyContent={
                "Aramanıza uygun hotel bulunamadı. Arama kriterlerinizi değiştirerek tekrar deneyebilirsiniz."
              }
            />
            <button className={classes.clearFilter} onClick={handleClearFilter}>
              Tüm Filtreleri Temizle
            </button>
          </>
        )}
        <Outlet />
      </main>
    </>
  );
};

export default HotelList;
