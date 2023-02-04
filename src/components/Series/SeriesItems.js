import classes from "./SeriesItems.module.css";

const SeriesItems = (props) => {
  const { name, year, network, image, followers } = props;
  return (
    <div className={classes.card}>
      <img src={image?.medium} />
      <div className={classes.container}>
        <h3 className="">{name}</h3>
        <div className={classes.seriesitems}>
          <div className={classes.firstRowItems}>
            <div className={classes.griditem}>
              {year}
              <p>year</p>
            </div>
            <div className={classes.griditem}>
              {network?.name}
              <p>Network</p>
            </div>
            <div className={classes.griditem}>
              {network?.country.name}
              <p>Country</p>
            </div>
            <div className={classes.griditem}>
              {followers?.thetvdb}
              <p>Followers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeriesItems;
