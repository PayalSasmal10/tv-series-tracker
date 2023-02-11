import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import AvailableSeries from "./components/Series/AvailableSeries";
import { useEffect, useState } from "react";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import RootLayout from "./components/Router/Root";
import ViewParticularShow from "./components/ParticularShow/ViewParticularShow";
import ReactPaginate from "react-paginate";


function App() {
    const [serieses, setSerieses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();
    const [filteredValue, setfilteredValue] = useState([]);
    const [selectedSeries, setSelectedSeries] = useState([]);
    const [items, setItems] = useState([]);



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
          id: +key+1,
          name: responseData[key].name,
          year: responseData[key].premiered,
          network: responseData[key].network,
          image: responseData[key].image,
          followers: responseData[key].externals,
          language: responseData[key].language,
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

 const router = createBrowserRouter([
    { 
      path : '/', 
      element: <RootLayout serieses={serieses} setfilteredValue={setfilteredValue} />,
      children: [
        { path: '/', element: <AvailableSeries serieses={serieses} filteredValue={filteredValue}/>},
        { path: '/details/:id', element: <ViewParticularShow selectedSeries={selectedSeries} setSelectedSeries={setSelectedSeries} />},
      ],
    },
  ]);

  const handlePagination = (data) => {

    console.log(data);

  };

  return (
    <div className="App">
       {/* <Header serieses={serieses} setfilteredValue={setfilteredValue}/>
       <AvailableSeries serieses={serieses} filteredValue={filteredValue} />  */}
       {/* <RouterProvider router={router}/> */}
       <ReactPaginate 
        previousLabel={'<<'}
        nextLabel={'>>'}
        breakLabel={'...'}
        pageCount={50}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePagination}
        containerClassName={'pagination justify-content-center'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
       />
      
    </div>
  );
}

export default App;
