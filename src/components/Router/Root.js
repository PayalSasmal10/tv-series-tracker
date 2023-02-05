import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const RootLayout = ({serieses, setfilteredValue}) => {
    return (
        <>
        
        <Header serieses={serieses} setfilteredValue={setfilteredValue} />
        <Outlet/>
        </>
    );
}

export default RootLayout;