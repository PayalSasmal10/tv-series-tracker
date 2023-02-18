import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./ViewParticularShow.module.css";

const ViewParticularShow = ({ selectedSeries, setSelectedSeries, theme }) => {
  const {
    id,
    network,
    image,
    status,
    runtime,
    type,
    genres,
    summary,
    schedule,
    officialSite,
  } = selectedSeries;

  const [isViewLoading, setIsViewLoading] = useState(true);
  const generLength = genres && genres.length;

  const { id: seriesId } = useParams();

  const fetchParticularShow = async (Ids) => {
    const response = await fetch(`https://api.tvmaze.com/shows/${Ids}`);

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const responseForSelectedData = await response.json();

    setSelectedSeries(responseForSelectedData);
    setIsViewLoading(false);
  };

  useEffect(() => {
    if (seriesId) {
      fetchParticularShow(seriesId);
    }
  }, [seriesId]);

  if (isViewLoading) {
    return <div className={classes.ring}>Loading</div>;
  }

  return (
    <div className={classes.details} key={id}>
      <div className={` ${classes.imgCard} ${theme} === "dark" ? ${classes.darkImgCard} : ${classes.lightImgCard}`}>
        <img className={classes.img} src={image?.original} />
      </div>
      <div className={classes.focusdetails}>
        <p dangerouslySetInnerHTML={{ __html: summary }} />
      </div>
      <div className={classes.details_sub}>
        <h1 className={classes.focusdetails}>Show Info</h1>
        <div className={classes.focusdetails}>
          <span className={classes.genre}>Network: </span>
          <a href={network?.officialSite} className={`${theme} === "light" ? ${classes.officialSiteA} : ''`}>{network?.name}</a>
        </div>
        <div className={classes.focusdetails}>
          <span className={classes.genre}>Schedule: </span>
          {schedule?.days} at {schedule?.time} ({runtime}m)
        </div>
        <div className={classes.focusdetails}>
          <span className={classes.genre}>Country: </span>
          {network?.country.name}
        </div>
        <div className={classes.focusdetails}>
          <span className={classes.genre}>Status: </span> {status}
        </div>
        <div className={classes.focusdetails}>
          <span className={classes.genre}>Show Type: </span> {type}
        </div>
        <div className={classes.focusdetails}>
          <span className={classes.genre}>Genres: </span>{" "}
          {genres?.map((genre, idx) => (
            <span>
              {genre}
              {idx < generLength - 1 && " | "}
            </span>
          ))}
        </div>
        <div className={classes.focusdetails}>
          <span className={classes.genre}>Official site : </span>
          <a href={officialSite} className={`${theme} === "light" ? ${classes.officialSiteA} : ''`}>{officialSite}</a>
        </div>
      </div>
      
    </div>

  );
};

export default ViewParticularShow;
