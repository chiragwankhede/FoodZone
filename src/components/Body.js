import Rescard from "./Rescard";
import resObj from "../utils/mockdata";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const [restuarantlist, setRestuarantlist] = useState([]);
  const [filterRestuarant , setfilterRestuarant] = useState([])

  const [search , setsearch] = useState("")



  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();
    console.log(jsonData);
    setRestuarantlist(jsonData?.data.cards[1]?.card.card?.gridElements?.infoWithStyle?.restaurants);
    setfilterRestuarant(jsonData?.data.cards[1]?.card.card?.gridElements?.infoWithStyle?.restaurants);
    

  };




  return filterRestuarant.length === 0 ? <Shimmer/> :  (
    <div className="body">
      <div className="top">
        <div className="search">
          <input type="text" className="search-box" value={search} onChange={(e)=>{setsearch(e.currentTarget.value)}}></input>
          <button onClick={()=>{
            const filterRes =restuarantlist.filter((resdata)=>resdata.info.name.toLowerCase().includes(search.toLowerCase()));
            setfilterRestuarant(filterRes); 
            
          }}>Search</button>
        </div>
        <button
          className="top-btn"
          onClick={() => {
            const filterList = restuarantlist.filter(
              (resdata) => resdata.info.avgRating > 4.5
            );
            setfilterRestuarant(filterList);
          }}>Top Rated Restaurant</button>

      </div>
      <div className="res-container">
        {filterRestuarant.map((resdata) => (
          <Link key={resdata.info.id} to = {"/restuarants/" + resdata.info.id}><Rescard  resdata={resdata} /> </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
