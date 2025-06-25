import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard.cardGroupMap?.REGULAR.cards[1]?.card
      ?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines?.join(",")}</h3>
      <h3>{costForTwoMessage}</h3>
      <ul>
        {itemCards?.map((me) => (
          <li key={me?.card?.info?.id}>{me?.card?.info?.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
