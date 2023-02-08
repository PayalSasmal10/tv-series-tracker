import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ViewParticularShow = ({ selectedSeries, setSelectedSeries }) => {
  const { name, language, premiered, network, image, status,runtime , genres} = selectedSeries;

  const generLength = genres && genres.length;

  const {id: seriesId} = useParams();

  const fetchParticularShow = async(Ids) => {
    const response = await fetch(`https://api.tvmaze.com/shows/${Ids}`);

    if(!response.ok){
      throw new Error("Something went wrong");
    }

    const responseForSelectedData = await response.json();

    setSelectedSeries(responseForSelectedData);
    
  };

  useEffect(() => {
    
    if(seriesId){
      fetchParticularShow(seriesId)
    }
  }, [seriesId]);

  return (
    <div>
      {/* <img src={image?.original} /> */}
      <div>
        <span>Name: {name}</span>
        <span>language: {language}</span>
        <span>Premiered: {premiered}</span>
        <span>Network: {network?.name}</span>
        <span>Country: {network?.country.name}</span>
        <span>Status: {status}</span>
        <span>Total Runtime: {runtime}m</span>
        <span>Genres: {genres?.map((genre, idx) => <span>{genre}{idx < generLength - 1 && ","}</span>)}</span>
      </div>
    </div>
  );
};

export default ViewParticularShow;
