import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import  classes from "./ViewParticularShow.module.css";

const ViewParticularShow = ({ selectedSeries, setSelectedSeries }) => {
  const {
    name,
    language,
    premiered,
    network,
    image,
    status,
    runtime,
    genres,
    summary,
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
    return <p>Loading</p>;
  }

  return (
    <div>
      <div className={classes.imgdiv}>
        <img className={classes.img} src={image?.medium} />
      </div>
      <div className={classes.details}>
        <div>Name: {name}</div>
        <div>language: {language}</div>
        <div>Premiered: {premiered}</div>
        <div>Network: {network?.name}</div>
        <div>Country: {network?.country.name}</div>
        <div>Status: {status}</div>
        <div>Total Runtime: {runtime}m</div>
        <div>
          Genres:{" "}
          {genres?.map((genre, idx) => (
            <span>
              {genre}
              {idx < generLength - 1 && ","}
            </span>
          ))}
        </div>
        <div>

        <div dangerouslySetInnerHTML={{ __html: summary }} />
        </div>
      </div>
    </div>
  );
};

export default ViewParticularShow;
