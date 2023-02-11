import SeriesItems from "./SeriesItems";
import classes from "./AvailableSeries.module.css";
import Pagination from "../Pagination/Pagination";
import { useState } from "react";


const AvailableSeries = (props) => {
  const [currentPages, setCurrentPages] = useState();
  
  const seriesList = props.filteredValue.map((series) => (
    <SeriesItems
      key={series.id}
      id={series.id}
      name={series.name}
      year={series.year}
      network={series.network}
      image={series.image}
      followers={series.followers}
      language={series.language}
      setSelectedSeries={props.setSelectedSeries}
    />
  ));

  const handlePagination = (event) => {
    let currentPage = event.selected + 1
    console.log(currentPage);
    // return currentPage;
    setCurrentPages(currentPage);
}

  return (
      <section className={classes.seriesSection}>
        {seriesList}
        <Pagination itemsPerPage={props.itemsPerPage} totalItems={props.totalItems} handlePagination={currentPages}/>
      </section>
      
  );
  
};
export default AvailableSeries;