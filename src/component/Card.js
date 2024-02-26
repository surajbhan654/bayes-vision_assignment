import "./card.css";

const Card = (props) =>{
    
    return(
            <div className="card">
                <img className="card-img" src={props.resData.imageAdd} alt="card img"/>
                <p className="card-heading">{props.resData.heading}</p>
                <p className="card-text"> {props.resData.text} </p>
            </div>
    );
 };

 export default Card;