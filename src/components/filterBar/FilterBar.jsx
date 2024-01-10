import classes from './FilterBar.module.css'

const FilterBar = ({ uniqueLocations, selectedLocation, onLocationClick }) => {
    return (
      <div className={classes.filter}>
        <ul>
          {uniqueLocations.map((filterItem, index) => (
            <li
              key={index}
              onClick={() => onLocationClick(filterItem.location)}
              className={ selectedLocation.includes(filterItem.location) ? classes.active : ""}>
              {filterItem.location}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default FilterBar;
  