import classes from "./LazyImage.module.css";
import blurImage from "../../assets/blur-image.png";

const LazyImage = ({ src }) => {
  return (
    <img
      src={blurImage}
      className={classes.lazyImage}
      loading="lazy"
      data-src={src}
      onLoad={(e) => {
        e.target.src = e.target.dataset.src;
      }}
    />
  );
};

export default LazyImage;
