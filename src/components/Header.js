import classes from "./Header.module.css";
import {BsSearch} from 'react-icons/bs';

const Header = () => {
    return (
        <div className={classes.header}>
            <a className={classes.home} href="#home">Home</a>
            <a href="#about">About</a>
            <input className={classes.search} type="text" />
            <button className={classes.btn} type="submit"><BsSearch/></button>
        </div>
        
    );
};

export default Header;