import { useEffect, useState } from "react";
import SeriesItems from "./SeriesItems";
import Card from "../Card/Card";
import classes from "./AvailableSeries.module.css";


const AvailableSeries = () => {
    const [serieses, setSerieses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();



  useEffect(() => {
    const fetchSeries = async () => {
      const response =  await fetch(
        "https://api.tvmaze.com/shows"
      );

      console.log("fettching details.....");
      
    
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      // console.log(responseData);

      const loadedSeries = [];

      for(const key in responseData){
        loadedSeries.push({
          id: key,
          name: responseData[key].name,
          year: responseData[key].premiered,
          network: responseData[key].network,
          image: responseData[key].image,
        });
      }

      // console.log(loadedSeries);
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

  if(httpError){
    return(
      <section>
        <p>{httpError}</p>
      </section>
    );
  }

  console.log(serieses);
  const seriesList = serieses.map((series) => (
    <SeriesItems
      key={series.id}
      id={series.id}
      name={series.name}
      year={series.year}
      network={series.network}
      image={series.image}
    />
  ));

  return (
      <section className={classes.seriesSection}>
        {seriesList}

      </section>
      
  );
  
};
export default AvailableSeries;