import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import AvailableSeries from "./components/Series/AvailableSeries";

function App() {
  return (
    <div className="App">
      <Header />
      <AvailableSeries />
    </div>
  );
}

export default App;
