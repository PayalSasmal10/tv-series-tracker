import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const RootLayout = ({ serieses, filteredValue, setfilteredValue, setTheme, theme }) => {
  return (
    <>
      <Header
        serieses={serieses}
        setfilteredValue={setfilteredValue}
        setTheme={setTheme}
        theme={theme}
        filteredValue={filteredValue}
      />
      <Outlet />
    </>
  );
};

export default RootLayout;
