import "./card2.css";
import { useState } from "react";

const Card2 = (props) =>{

        const [showFullText, setShowFullText] = useState(false);

        const toggleText = () => {
        setShowFullText(!showFullText);
        };
    return(
            <div className="card">
                <img className="card-img" src={props.resData2.imageAdd} alt="card img"/>
                <p className="card-heading">{props.resData2.heading}</p>
                <p className="card-text">  
                <p className="card-text">
                    {showFullText ? props.resData2.text : `${props.resData2.text.slice(0, 180)}...`}
                </p>
                    <button onClick={toggleText}>
                        {showFullText ? 'Show Less' : 'Show More'}
                    </button>
                </p>
            </div>
    );
 };

 export default Card2;