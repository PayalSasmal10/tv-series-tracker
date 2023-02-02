import { useEffect, useState } from "react";
import SeriesItems from "./SeriesItems";
import Card from "../Card/Card";


const AvailableSeries = () => {
    const [serieses, setSerieses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();



  useEffect(() => {
    const fetchSeries = async () => {
      const response =  await fetch(
        "https://api.tvmaze.com/shows/series.json"
      );

      console.log("fettching details.....");
    
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      const loadedSeries = [];

      for(const key in responseData){
        loadedSeries.push({
          id: key,
          name: responseData[key].name,
          year: responseData[key].premiered,
          network: responseData[key].network,
          country: responseData[key].network.country.name,
        });
      }
      setSerieses(loadedSeries);
      setIsLoading(false);
    };

    fetchSeries().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if(isLoading){
    return(
      <p>Loading.....</p>
    );
    
  }

  const seriesList = serieses.map((series) => {
    <SeriesItems>
      key={series.id}
      id={series.id}
      name={series.name}
      year={series.year}
      network={series.network}
      country={series.country}
    </SeriesItems>
  });

  return (
    <Card>
      {seriesList}
    </Card>
  );
  
};
export default AvailableSeries;