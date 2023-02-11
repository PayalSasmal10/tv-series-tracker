import classes from "./SeriesItems.module.css";
import { BiLogInCircle } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";

const SeriesItems = (props) => {
  const { id, name, year, network, image, followers, language } = props;
  const fetch_year = new Date(year);
  const only_year = fetch_year.getFullYear();

  return (
    <div className={classes.card}>
      <Link to={`/details/${id}`} className={classes.linkCss}>
      <img src={image?.medium} />
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
              <FiMoreHorizontal />
              <p>More info</p>
            </div>
          </div>
        </div>
      </div>
      </Link>
    </div>
    
  );
};

export default SeriesItems;
