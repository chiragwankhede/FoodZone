import React from "react";
import ReactDOM from "react-dom"

const num = 10;

const Tittle = ()=>{
    return (
        <div>
            <p>This is inside Heading with num = {num}</p>
            
        </div>
    )
}

 function Heading (){
    return (
        <div>
            <p>This is Heading ok</p>
            <Tittle/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading/>)