import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import RestuarantCategory from "./RestuarantCategory";

const RestuarantMenu = () => {
  const [resinfo, setresinfo] = useState(null);

  const [showIndex , setShowIndex] = useState(null);

  const { resID } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(
      MENU_API + resID + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await response.json();
    setresinfo(json.data);
  };

  if (resinfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resinfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  // console.log(resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  return (
    <div className="bg-slate-50 text-center">
      <h3 className="m-4 p -4 font-bold text-3xl font-serif">{name}</h3>
      <p className="m-4 p -4 font-bold text-xl font-serif">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      {categories.map((category , index) => (
        <RestuarantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItem={ index === showIndex ? true : false}
          setShowIndex ={()=>setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestuarantMenu;














{
  /* <ul className="m-4 p-2 font-serif   ">
{itemCards.map((items) => (
  <li className="p-1 m-1 list-decimal" key={items.card.info.id}>
    {items.card.info.name} - Rs.{items.card.info.price / 100}
  </li>
))}
</ul> */
}
