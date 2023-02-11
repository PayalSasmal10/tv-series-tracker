import logo from "./logo.svg";
import "./App.css";
import AvailableSeries from "./components/Series/AvailableSeries";
import { useEffect, useState } from "react";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import RootLayout from "./components/Router/Root";
import ViewParticularShow from "./components/ParticularShow/ViewParticularShow";


const itemsPerPage = 12;
function App() {
  const [serieses, setSerieses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  const [filteredValue, setfilteredValue] = useState([]);
  const [selectedSeries, setSelectedSeries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchSeries = async () => {
      const response = await fetch("https://api.tvmaze.com/shows");

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      const loadedSeries = [];

      for (const key in responseData) {
        loadedSeries.push({
          id: +key + 1,
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

  if (isLoading) {
    return <p>Loading.....</p>;
  }

  if (httpError) {
    return (
      <section>
        <p>{httpError}</p>
      </section>
    );
  }

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = serieses.slice(indexOfFirstItem, indexOfLastItem);

  // change page
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);


  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <RootLayout
          serieses={currentItems}
          setfilteredValue={setfilteredValue}
        />
      ),
      children: [
        {
          path: "/",
          element: (
            <AvailableSeries
              serieses={currentItems}
              filteredValue={filteredValue}
              itemsPerPage={itemsPerPage}
              totalItems={serieses.length}
            />
          ),
        },
        {
          path: "/details/:id",
          element: (
            <ViewParticularShow
              selectedSeries={selectedSeries}
              setSelectedSeries={setSelectedSeries}
            />
          ),
        },
      ],
    },
  ]);

  // const fetchPage = async (currentPage) => {
  //   const res = await fetch(`https://api.tvmaze.com/shows?_page=${currentPage}&_limit=12`);
  //   const data = await res.json();
  //   return data;
  // };

  return (
    <div className="App">
      {/* <Header serieses={serieses} setfilteredValue={setfilteredValue}/>
       <AvailableSeries serieses={serieses} filteredValue={filteredValue} />  */}
      <div>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
