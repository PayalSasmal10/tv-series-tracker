import classes from "./SeriesItems.module.css";

const SeriesItems = (props) => {
  const { name, year, network, image } = props;
  return (
    <div className={classes.card}>
      <img src={image?.medium} className="" />
      <div className={classes.container}>
        <h3 className="">{name}</h3>
        <p>{year}</p>
        <p>{network?.name}</p>
        <p>{network?.country.name}</p>
      </div>
    </div>
  );
};

export default SeriesItems;
