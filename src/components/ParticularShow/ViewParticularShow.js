import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./ViewParticularShow.module.css";


const ViewParticularShow = ({ selectedSeries, setSelectedSeries }) => {
  const {
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
  
  // const official = test.replace(/^http?:\/\//, '');
  console.log(officialSite);
  
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
      setIsViewLoading(false);
    }
  }, [seriesId]);

  if (!isViewLoading) {
    return <div className={classes.ring}>Loading</div>
  }

  return (
    <div className={classes.details}>
        <img className={classes.img} src={image?.original} />
      <div className={classes.focusdetails}>
        <p dangerouslySetInnerHTML={{ __html: summary }} />
      </div>
      <div className={classes.details_sub}>
        {/* <br></br> */}
        <h1 className={classes.focusdetails}>Show Info</h1>
        <div className={classes.focusdetails}><span className={classes.genre}>Network: </span><a href={network?.officialSite}>{network?.name}</a></div>
        <div className={classes.focusdetails}><span className={classes.genre}>Schedule: </span>{schedule?.days} at {schedule?.time} ({runtime}m)</div>
        <div className={classes.focusdetails}><span className={classes.genre}>Country: </span>{network?.country.name}</div>
        <div className={classes.focusdetails}><span className={classes.genre}>Status: </span> {status}</div>
        <div className={classes.focusdetails}><span className={classes.genre}>Show Type: </span> {type}</div>
        <div className={classes.focusdetails}>
        <span className={classes.genre}>Genres: </span>{" "}
          {genres?.map((genre, idx) => (
            <span >
              {genre}
              {idx <generLength - 1 && " | "}
            </span>
          ))}
        </div>
        <div className={classes.focusdetails}><span className={classes.genre}>Official site : </span><a href={officialSite}>{officialSite}</a></div>
        
      </div>
      
    </div>
  );
};

export default ViewParticularShow;
