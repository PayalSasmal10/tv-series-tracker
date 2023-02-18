import "./App.css";
import AvailableSeries from "./components/Series/AvailableSeries";
import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/Router/Root";
import ViewParticularShow from "./components/ParticularShow/ViewParticularShow";

const itemsPerPage = 12;

function App() {
  // Managing states
  const [serieses, setSerieses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  const [filteredValue, setfilteredValue] = useState([]);
  const [selectedSeries, setSelectedSeries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [theme, setTheme] = useState("dark");

  // Loading filtered value
  useEffect(() => {
    setfilteredValue(serieses);
  }, [serieses]);

// Fetching data from API
  useEffect(() => {
    const fetchSeries = async () => {
      const response = await fetch("https://api.tvmaze.com/shows");

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      setSerieses(responseData);
      setIsLoading(false);
    };

    fetchSeries().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return <div className={`ring`}>Loading</div>;
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
  const currentItems = filteredValue.slice(indexOfFirstItem, indexOfLastItem);

  //Router creation
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <RootLayout
          serieses={serieses}
          setfilteredValue={setfilteredValue}
          setTheme={setTheme}
          theme={theme}
        />
      ),
      children: [
        {
          path: "/",
          element: (
            <AvailableSeries
              currentItems={currentItems}
              itemsPerPage={itemsPerPage}
              totalItems={filteredValue.length}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              theme={theme}
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

  return (
    <div className={`App ${theme}`}>
      <div>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
