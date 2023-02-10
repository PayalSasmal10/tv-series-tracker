import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./ViewParticularShow.module.css";

const ViewParticularShow = ({ selectedSeries, setSelectedSeries }) => {
  const {
    network,
    image,
    status,
    runtime,
    genres,
    summary,
    schedule,
    officialSite,

  } = selectedSeries;

  const official = {officialSite};
  
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
    return <p>Loading</p>;
  }

  return (
    <div>
      <div className={classes.imgdiv}>
        <img className={classes.img} src={image?.original} />
      </div>
      <div className={classes.details}>
        <br></br>
        <h1 className={classes.focusdetails}>Show Info</h1>
        <div className={classes.focusdetails}>Network: <a href={network?.officialSite}>{network?.name}</a></div>
        <div className={classes.focusdetails}>Schedule: {schedule?.days} at {schedule?.time}</div>
        <div className={classes.focusdetails}>Country: {network?.country.name}</div>
        <div className={classes.focusdetails}>Status: {status}</div>
        <div className={classes.focusdetails}>Total Runtime: {runtime}m</div>
        <div className={classes.focusdetails}>
          Genres:{" "}
          {genres?.map((genre, idx) => (
            <span>
              {genre}
              {idx < generLength - 1 && ","}
            </span>
          ))}
        </div>
        <div className={classes.focusdetails}>Official site : <a href={officialSite}>t</a></div>
        <br></br>
      </div>
      <div className={classes.contents}>
        <p dangerouslySetInnerHTML={{ __html: summary }} />
      </div>
    </div>
  );
};

export default ViewParticularShow;
