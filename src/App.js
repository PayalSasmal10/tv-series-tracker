import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import AvailableSeries from "./components/Series/AvailableSeries";
import { useEffect, useState } from "react";

function App() {
    const [serieses, setSerieses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();
    const [filteredValue, setfilteredValue] = useState([]);



  useEffect(() => {
    const fetchSeries = async () => {
      const response =  await fetch(
        "https://api.tvmaze.com/shows"
      );
      
    
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      const loadedSeries = [];

      for(const key in responseData){
        loadedSeries.push({
          id: key,
          name: responseData[key].name,
          year: responseData[key].premiered,
          network: responseData[key].network,
          image: responseData[key].image,
        });
      }

      setSerieses(loadedSeries);
      setIsLoading(false);

    };

    fetchSeries().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  

  if(isLoading){
    return(
      <p>Loading.....</p>
    );
    
  }

  if(httpError){
    return(
      <section>
        <p>{httpError}</p>
      </section>
    );
  }

  return (
    <div className="App">
      <Header serieses={serieses} setfilteredValue={setfilteredValue}/>
      <AvailableSeries serieses={serieses} filteredValue={filteredValue} />
    </div>
  );
}

export default App;
