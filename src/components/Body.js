import Rescard from "./Rescard";
import resObj from "../utils/mockdata";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const Body = () => {
  const [restuarantlist, setRestuarantlist] = useState([]);

  const[button , setButton]=useState("Login")

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();

    setRestuarantlist(jsonData?.data.cards[1]?.card.card?.gridElements?.infoWithStyle?.restaurants);
    

  };




  return restuarantlist.length === 0 ? <Shimmer/> : (
    <div className="body">
      <div className="top">
        <button
          className="top-btn"
          onClick={() => {
            const filterList = restuarantlist.filter(
              (resdata) => resdata.info.avgRating > 4.3
            );
            setRestuarantlist(filterList);
          }}>Top Rated Restaurant</button>

        <button className="login-btn" onClick={()=>{
          button === "Login"? setButton("Logout") : setButton("Login")}}>{button}</button>
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
