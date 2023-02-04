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
            <p>{year}</p>
            <p>{network?.name}</p>
          </div>
          <div className={classes.secondRowItems}>
            <p>{network?.country.name}</p>
            <p>{followers?.thetvdb}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeriesItems;
