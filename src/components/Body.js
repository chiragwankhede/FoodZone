import Rescard from "./Rescard";
import resObj from "../utils/mockdata";
import { useEffect, useState } from "react";

const Body = () => {
const [restuarantlist , setRestuarantlist] = useState(resObj)



return (
  <div className="body">
    <div className="top">
      <button className="top-btn" 
      onClick={()=>{
        const filterList = restuarantlist.filter((resdata)=>resdata.info.avgRating> 4.5);
        setRestuarantlist(filterList);
        }}> Top Rated Restaurant</button>
    </div>
    <div className="res-container">
      {restuarantlist.map((resdata) => (
        <Rescard key={resdata.info.id} resdata={resdata} />
      ))}
    </div>
  </div>
);
};


export default Body;


