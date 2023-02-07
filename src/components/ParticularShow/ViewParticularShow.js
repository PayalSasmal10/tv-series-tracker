const ViewParticularShow = ({ selectedSeries }) => {
  const { id, name, language, premiered, network, image, status,runtime , genres} = selectedSeries;
  console.log(genres);
  const generLength = genres && genres.length;
  return (
    <div>
      {/* <img src={image?.original} /> */}
      <div>
        <span>Name: {name}</span>
        <span>language: {language}</span>
        <span>Premiered: {premiered}</span>
        <span>Network: {network?.name}</span>
        <span>Country: {network?.country.name}</span>
        <span>Status: {status}</span>
        <span>Total Runtime: {runtime}m</span>
        <span>Genres: {genres.map((genre, idx) => <span>{genre}{idx < generLength - 1 && ","}</span>)}</span>
      </div>
    </div>
  );
};

export default ViewParticularShow;
