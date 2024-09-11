import Rescard from "./Rescard";
import resObj from "../utils/mockdata";
import Shimmer from "./Shimmer";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";




const Body = () => {
  const [restuarantlist, setRestuarantlist] = useState([]);
  const [filterRestuarant , setfilterRestuarant] = useState([])

  const [search , setsearch] = useState("")

  // console.log(restuarantlist);
  



  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();
    // console.log(jsonData);
    setRestuarantlist(jsonData?.data.cards[1]?.card.card?.gridElements?.infoWithStyle?.restaurants);
    setfilterRestuarant(jsonData?.data.cards[1]?.card.card?.gridElements?.infoWithStyle?.restaurants);
    

  };

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false){
    return (
    <h1>Looks like you are Offline, Plz check your Internet Connection.... </h1>
      
    )
  }

  const{LoggedInUSer ,setUserName} = useContext(UserContext)


  return filterRestuarant.length === 0 ? <Shimmer/> :  (
    <div className="bg-white">
      <div className="flex">
        <div className="m-4 p-4 ">
          <input type="text" className="border border-solid border-black" value={search} onChange={(e)=>{setsearch(e.currentTarget.value)}}></input>
          <button className="px-4 py-1 bg-slate-300 m-2 rounded-lg "onClick={()=>{
            const filterRes =restuarantlist.filter((resdata)=>resdata.info.name.toLowerCase().includes(search.toLowerCase()));
            setfilterRestuarant(filterRes); 
            
          }}>Search</button>
        </div>
        <div className="m-4 p-4 flex items-center">
        <button
          className="px-4 bg-slate-400 rounded-lg"
          onClick={() => {
            const filterList = restuarantlist.filter(
              (resdata) => resdata.info.avgRating > 4.5
            );
            setfilterRestuarant(filterList);
          }}>Top Rated Restaurant</button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <label className="text-md font-serif">UserName: </label>
            <input className="border border-black p-2 font-serif" value = {LoggedInUSer} onChange={(e)=>setUserName(e.target.value)}></input>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filterRestuarant.map((resdata) => (
          <Link key={resdata.info.id} to = {"/restuarants/" + resdata.info.id}><Rescard  resdata={resdata} /> </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
