import classes from "./Header.module.css";
import {BsSearch} from 'react-icons/bs';
import React, { useEffect, useRef, useState } from "react";

const Header = () => {
    const [active, setActive] = useState(false);
    const input_value = useRef(false);

    useEffect(() => {
        if (active) input_value.current.value 
    }, (active));

    const searchButtonHandler = () => {
        setActive(!active);
    };

    return (
        <div className={classes.header}>
            <a className={classes.home} href="#home">Home</a>
            <a href="#about">About</a>
            <input className={active?classes.search:classes.input} ref={input_value} type="text" placeholder="Search the TV series"/>
            <button className={classes.btn} type="submit" onClick={searchButtonHandler}><BsSearch/></button>
        </div>
        
    );
};

export default Header;