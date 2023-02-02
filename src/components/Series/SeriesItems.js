
const SeriesItems = (props) => {
    return (
        <div>
            <h3>{props.name}</h3>
            <div>{props.year}</div>
            <div>{props.network}</div>
            <div>{props.country}</div>
        </div>
    );
};

export default SeriesItems;