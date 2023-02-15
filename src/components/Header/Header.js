import classes from "./Header.module.css";
import { BsSearch } from "react-icons/bs";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";

const Header = ({ serieses, setfilteredValue, setTheme, theme, activated, setActivated}) => {
  const [active, setActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const input_value = useRef();

  // useEffect(() => {
  //   if (active) input_value.current.textContent = "";
  // }, [active]);

  // console.log(active);



  const searchButtonHandler = () => {
    setActive(!active);
  };

  const searchHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  

  useEffect(() => {
    const searchedValue = serieses.filter((val) => {
      if (searchTerm === "") {
        return val;
      } else if (val.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
          return val;
      }
    });
    setfilteredValue(searchedValue);
  },[searchTerm, serieses])


  const themeHandler = () => {
    if (theme === "light"){
      setTheme("dark");
    }

    if (theme === "dark"){
      setTheme("light");
    }
  }

  return (
    <div className={classes.header}>
      <Link className={classes.home} to="/">
        Home
      </Link>
      <a href="#about">About</a>
      <a className={classes.mode} onClick={themeHandler}> <MdDarkMode /></a>
      <input
        className={active ? classes.input : classes.search}
        ref={input_value}
        type="text"
        placeholder="Search the TV series"
        onChange={searchHandler}
      />
      <button
        className={classes.btn}
        type="submit"
        onClick={searchButtonHandler}
      >
      <BsSearch />
      </button>
    </div>
  );
};

export default Header;
