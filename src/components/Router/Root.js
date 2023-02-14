import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const RootLayout = ({serieses, setfilteredValue, setTheme, theme}) => {
    return (
        <>
        
        <Header serieses={serieses} setfilteredValue={setfilteredValue} setTheme={setTheme} theme={theme}/>
        <Outlet/>
        </>
    );
}

export default RootLayout;