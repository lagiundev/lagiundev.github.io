import React, {useState} from "react";



const Tour = ({id, image, info, name, price, removeTour}) => {

    const [readMore, setReadMore] = useState(false);

    return <article className="single-tour">   

        <div className="relative">
        <img src={image} alt={name}></img>
        <h4 className="tour-price">${price}</h4>    
        </div>
        <footer>
            <div className="tour-info">
                <h2>{name}</h2>
            </div>
            <p>{readMore?        
            info : `${info.substring(0,250)}...`
            }
            <button onClick={()=>setReadMore(!readMore)}>{readMore?'show less' : 'read more'}</button>
            </p>
            <button className="delete-btn" onClick={()=>removeTour(id)}> not interested </button>
        </footer>

        
        </article>


}

export default Tour