
const AvailableSeries = () => {
    const response = fetch("https://api.tvmaze.com/search/shows?q=girls/series.json");
    
    
    if(!response.ok){
        throw new Error("Something went wrong!");
    }
    
};

export default AvailableSeries;