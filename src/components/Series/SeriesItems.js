import classes from "./SeriesItems.module.css";
import { BiLogInCircle } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
import { useState } from "react";
import ParticularShow from "../ParticularShow/ParticularShow";
import { useNavigate } from "react-router-dom";

const SeriesItems = (props) => {
  const [selectedSeries, setSelectedSeries] = useState([]);
  const [httpErrors, setHttpErrors] = useState();
  const { id, name, year, network, image, followers } = props;
  const fetch_year = new Date(year);
  const only_year = fetch_year.getFullYear();
  const navigate = useNavigate();

  const fetchParticularShow = async(id) => {
    
    if(id === 0){
      id = 1;
    }
    const response = await fetch(`https://api.tvmaze.com/shows/${id}`);

    if(!response.ok){
      throw new Error("Something went wrong");
    }

    const responseForSelectedData = await response.json();

    const clickedSeries = [];

    console.log("response", responseForSelectedData);

    for(const key in responseForSelectedData){
      clickedSeries.push({
        id: key,
        name:responseForSelectedData.name,
        premiered:responseForSelectedData.premiered,
        network:responseForSelectedData.network,
      });
    }
    setSelectedSeries(clickedSeries);
    console.log(selectedSeries);
    <ParticularShow selectedSeries={selectedSeries} />
    navigate('/details');

  };

  // fetchParticularShow().catch((error) => {
  //   setHttpErrors(error.message);
  // });
  
  return (
    <div className={classes.card} onClick={() => fetchParticularShow(id)}>
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
              <FiMoreHorizontal />
              <p>More info</p>
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
              <BiLogInCircle/>
              <p>Login to follow</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeriesItems;
