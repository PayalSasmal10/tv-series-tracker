import classes from "./Header.module.css";
import { BsSearch } from "react-icons/bs";
import React, { useEffect, useRef, useState } from "react";

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

    console.log("testing search");
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
        console.log("am I going");
      });

      setfilteredValue(searchedValue);
  },[serieses, searchTerm])

  return (
    <div className={classes.header}>
      <a className={classes.home} href="/">
        Home
      </a>
      <a href="#about">About</a>
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
