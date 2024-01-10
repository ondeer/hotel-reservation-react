import classes from './PageNotFound.module.css'
import pageError from '../../assets/pageError.png'
import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div className={classes.pageFound}>
            <div className={classes.imageDiv}>
            <img src={pageError} alt="Not Found" />
            </div>
            <div className={classes.goToHome}>
                <h3>Sayfa Bulunamadı</h3>
                <Link to='/'>Ana Sayfaya Dön</Link>
            </div>
        </div >
    )
}

export default PageNotFound