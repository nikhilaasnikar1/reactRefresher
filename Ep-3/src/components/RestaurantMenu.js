import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  const [menu, setMenu] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9966135&lng=77.5920581&restaurantId=" +
        resId
    );

    const json = await data.json();

    setRestaurantMenu(json?.data?.cards[2]?.card?.card?.info);
    setMenu(
      json?.data?.cards[4]?.groupedCard.cardGroupMap?.REGULAR.cards[1]?.card
        ?.card?.itemCards
    );

    console.log(
      json?.data?.cards[4]?.groupedCard.cardGroupMap?.REGULAR.cards[1]?.card
        ?.card?.itemCards
    );
  };
  if (restaurantMenu === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } = restaurantMenu;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines?.join(",")}</h3>
      <h3>{costForTwoMessage}</h3>
      <ul>
        {menu.map((me) => (
          <li key={me?.card?.info?.id}>{me?.card?.info?.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
