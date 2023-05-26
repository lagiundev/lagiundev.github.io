import React, { useEffect } from "react";
import { useState } from "react";
import data from "./data";
import './index.css'

const App = () =>{
    const [lorem, setLorem] = useState(data)
    const [many, setMany] = useState(1)
    const [gen, setGen] = useState(0)
    useEffect(()=>{
        if(many<1){
            setMany(1);
        }
        if(many>9){
            setMany(9);
        }
        },[many])

    return <>
    <div className="container">
    <h1> Jolley ipsum generator</h1> 
    </div>
    <div className="container">
    <ul className="itemizer">
        {lorem.map((lorem, index)=>{
            if(index<gen){
                return <p key={index} className="item-container">{lorem}</p>
            }
            else return
        })}
    </ul>
    </div>
    <div className="container">
    <h1>{many} paragraphs</h1>
    <button className="btn" onClick={()=>setMany(many+1)}>+1</button>
    <button className="btn" onClick={()=>setMany(many-1)}>-1</button>
    <button className="btn" onClick={()=>setGen(many)}>generate</button>

    </div>
    </>
}

export default App