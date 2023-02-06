
const ViewParticularShow = (props) => {
    const {id, name, premiered, network} = props;
    return (
        <div>
            <span>Name: {name}</span>
            <span>Premiered: {premiered}</span>
            <span>Network: {network?.name}</span>
        </div>

    );
};

export default ViewParticularShow;