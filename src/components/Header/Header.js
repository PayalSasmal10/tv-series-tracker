import classes from "./Header.module.css";
import { BsSearch } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";

const Header = ({ serieses, setfilteredValue, setTheme, theme, setCurrentPage }) => {
  // state management
  const [active, setActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const searchButtonHandler = () => {
    setActive(!active);
  };

  // search state handler
  const searchHandler = (event) => {
    setSearchTerm(event.target.value);
  };
  
  // taking input from input field
  const inputSearchSeriesHandler = (valueToBeSearched) => {
    setCurrentPage(1);
    if (valueToBeSearched.trim() !== "") {
      const data = serieses.filter(fv => {
        console.log(fv.name.toLowerCase().includes(valueToBeSearched.toLowerCase()));
        return fv.name.toLowerCase().includes(valueToBeSearched.toLowerCase()) ? fv : "";
      });
      setfilteredValue(data);
    } else if (valueToBeSearched.trim() === "") {
      setfilteredValue(serieses);
    }
  }

  // call search input handler
  useEffect(() => {
    inputSearchSeriesHandler(searchTerm);
  }, [searchTerm])


  // THeme  handler
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
      {/* <a href="#about">About</a> */}
      <a className={classes.mode} onClick={themeHandler}> <MdDarkMode /></a>
      <input
        className={active ? classes.input : classes.search}
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
