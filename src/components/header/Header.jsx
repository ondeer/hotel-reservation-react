import { Link } from "react-router-dom";

import { MdFavorite } from "react-icons/md";

import logoSvg from "../../assets/logo.png";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.headerContainer}>
      <div className={classes.header}>
        <div className={classes.logo}>
        <Link to='/'><img src={logoSvg}></img></Link>
        </div>
        <div className={classes.favorite}>
        <Link to="/favorite" title="Favoriler"><MdFavorite/></Link>
        <span>Favorilerim</span>
        </div>
      </div>
    </div>
  );
};

export default Header;