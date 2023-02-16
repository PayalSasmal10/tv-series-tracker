import SeriesItems from "./SeriesItems";
import classes from "./AvailableSeries.module.css";
import Pagination from "../Pagination/Pagination";
import { AiFillHeart } from 'react-icons/ai';

const AvailableSeries = (props) => {

  const seriesList = props.currentItems.map((series) => (
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
    <div className={classes.availableSeries}>
      <section className={classes.seriesSection}>
        {seriesList}
      </section>
      <div className={classes.footer}>
        <Pagination 
          itemsPerPage={props.itemsPerPage} 
          totalItems={props.totalItems} 
          handlePagination={handlePagination}
          className={classes.paginationSection}
        />
        <div className={classes.waterMark}>Made with <AiFillHeart style={{color: "red"}} /> by <a href="">Payal Sasmal</a></div>
      </div>
    </div>
  );
};
export default AvailableSeries;