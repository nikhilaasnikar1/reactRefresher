import { cdn, CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurants } = props;

  const { name, cuisines, avgRating, sla, cloudinaryImageId } =
    restaurants.info;

  return (
    <div className="res-card">
      <img className="res-logo" src={cdn + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
