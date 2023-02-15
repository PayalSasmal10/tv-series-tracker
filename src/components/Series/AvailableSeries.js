import SeriesItems from "./SeriesItems";
import classes from "./AvailableSeries.module.css";
import Pagination from "../Pagination/Pagination";

const AvailableSeries = (props) => {

  console.log("props", props.activated);
  const seriesList = props.filteredValue.map((series) => (
    <SeriesItems
      key={series.id}
      id={series.id}
      name={series.name}
      year={series.premiered}
      network={series.network}
      image={series.image}
      followers={series.externals}
      language={series.language}
      rating={series.rating}
      setSelectedSeries={props.setSelectedSeries}
      theme={props.theme}
    />
  ));

  const handlePagination = (event) => {
    let currentPge = event.selected + 1
    props.setCurrentPage(currentPge);
    
}

  return (
    <>
      <section className={classes.seriesSection}>
        {seriesList}
      </section>
      <Pagination 
        itemsPerPage={props.itemsPerPage} 
        totalItems={props.totalItems} 
        handlePagination={handlePagination}
        className={classes.paginationSection}
      />
    </>
  );
};
export default AvailableSeries;