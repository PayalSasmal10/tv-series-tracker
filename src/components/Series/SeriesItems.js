const SeriesItems = (props) => {
    const {name, year, network} = props;
  return (
    <div>
      <h3 className="">{name}</h3>
      <div className="">{year}</div>
      <div className="">{network?.name}</div>
      <div className="">{network?.country.name}</div>
    </div>
  );
};

export default SeriesItems;
