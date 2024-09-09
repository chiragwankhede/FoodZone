import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants"; 

const RestuarantMenu = () => {
  const [resinfo, setresinfo] = useState(null);

  const { resID } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(MENU_API  + resID + "&catalog_qa=undefined&submitAction=ENTER");
    const json = await response.json();
    setresinfo(json.data);
  };

  if (resinfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resinfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards);

  return (
    <div className="menu">
      <h3>{name}</h3>
      <p>
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      <p>Menu</p>
      <ul className="resmenu-list">
        {itemCards.map((items) => (
          <li className = "resmenu"key={items.card.info.id}>
            {items.card.info.name} - Rs.{items.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestuarantMenu;
