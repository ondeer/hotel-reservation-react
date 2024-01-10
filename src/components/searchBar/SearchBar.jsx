import searchImage from "../../assets/hotel-search.jpg";
import classes from './SearchBar.module.css';

const SearchBar = ({ inputText, onInputChange }) => {
    return (
      <div
        className={classes.search}
        style={{ backgroundImage: `url(${searchImage})` }}
      >
        <input
          className={classes.searchInput}
          value={inputText}
          type="text"
          placeholder="Bulmak İstediğiniz Hotel Parmak Uçlarınızda..."
          onChange={onInputChange}
        />
      </div>
    );
  };
  
  export default SearchBar;
  