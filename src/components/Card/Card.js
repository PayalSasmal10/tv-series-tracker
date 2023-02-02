import classes from "./Card.module.css";

const Card = (props) => {
    return (
        // <div className={classes.card}>
        //     <img src="img_avatar.png" alt="Avatar" style="width:100%"></img>
        
        <div>{props.children}</div>
        // {/* </div> */}
    );
};
export default Card;