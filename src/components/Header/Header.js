import classes from "./Header.module.css";
import { BsSearch } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";

const Header = ({ serieses, setfilteredValue, setTheme, theme }) => {
  const [active, setActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const searchButtonHandler = () => {
    setActive(!active);
  };

  const searchHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  const inputSearchSeriesHandler = (valueToBeSearched) => {
    if (valueToBeSearched.trim() !== "") {
      const data = serieses.filter(fv => {
        return fv.name.toLowerCase().includes(valueToBeSearched.toLowerCase()) ? fv : "";
      });
      setfilteredValue(data);
    } else if (valueToBeSearched.trim() === "") {
      setfilteredValue(serieses);
    }
  }

  useEffect(() => {
    inputSearchSeriesHandler(searchTerm);
  }, [searchTerm])


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
