import classes from "./Header.module.css";
import { BsSearch } from "react-icons/bs";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";

const Header = ({ serieses, setfilteredValue }) => {
  const [active, setActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const input_value = useRef();

  useEffect(() => {
    if (active) input_value.current.textContent = "";
  }, [active]);

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
        } else if (
          val.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
        ) {
          return val;
        }
      });

      setfilteredValue(searchedValue);
  },[serieses, searchTerm])

  return (
    <div className={classes.header}>
      <Link className={classes.home} to="/">
        Home
      </Link>
      <a href="#about">About</a>
      <a className={classes.mode}> <MdDarkMode /></a>
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
        <a className={classes.searchIcon}><BsSearch /> </a>
      </button>
    </div>
  );
};

export default Header;
