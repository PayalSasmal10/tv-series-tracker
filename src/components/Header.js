import classes from "./Header.module.css";

const Header = () => {
    return (
        <div className={classes.header}>
            <a className={classes.home} href="#home">Home</a>
            <a href="#about">About</a>
            <input id="search" type="text" placeholder="Search TV Series..." />
        </div>
        
    );
};

export default Header;