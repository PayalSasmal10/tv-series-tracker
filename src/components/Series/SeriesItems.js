import classes from "./SeriesItems.module.css";
import { BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";


const SeriesItems = (props) => {
  // destructing of props
  const { id, name, year, network, image, followers, language, rating, theme } = props;
  const fetch_year = new Date(year);
  const only_year = fetch_year.getFullYear();

  const themeClass = theme === "dark" ? classes.darkCard : classes.lightCard;
 
  return (
    <div className={`${classes.card} ${themeClass}`} >
      <Link to={`/details/${id}`} className={classes.linkCss} >
      <img src={image?.medium} alt={name} />
      <div>
        <h3 className={classes.name}>{name}</h3>
        <div className={classes.seriesitems}>
          <div className={classes.firstRowItems}>
          <div className={classes.griditem}>
              {followers?.thetvdb}
              <p>Followers</p>
            </div>
            <div className={classes.griditem}>
              {only_year}
              <p>Year</p>
            </div>
            <div className={`${classes.griditem} ${classes.griditem1}`}>
              {language}
              <p>Language</p>
            </div>
            <div className={classes.griditem}>
              {network?.name}
              <p>Network</p>
            </div>
            <div className={classes.griditem}>
              {network?.country.code}
              <p>Country</p>
            </div>
            <div className={`${classes.griditem} ${classes.griditem1}`}>
            <div className={classes.star} ><BsStarFill /></div> {rating.average}/10              
            </div>
          </div>
        </div>
      </div>
      </Link>
    </div>
    
  );
};

export default SeriesItems;
