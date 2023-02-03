import { useEffect, useState } from "react";
import SeriesItems from "./SeriesItems";
import Card from "../Card/Card";
import classes from "./AvailableSeries.module.css";


const AvailableSeries = (props) => {
  
  const seriesList = props.filteredValue.map((series) => (
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