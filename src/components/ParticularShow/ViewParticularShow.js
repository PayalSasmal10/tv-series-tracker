
const ViewParticularShow = ({ selectedSeries }) => {
    const {id, name, premiered, network} = selectedSeries;
    console.log(id);
    return (
        <div>
            <span>Name: {name}</span>
            <span>Premiered: {premiered}</span>
            <span>Network: {network?.name}</span>
        </div>

    );
};

export default ViewParticularShow;