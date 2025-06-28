import { cdn, CDN_URL } from "../utils/constants";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

const RestaurantCard = (props) => {
  const { restaurants } = props;

  const { name, cuisines, avgRating, sla, cloudinaryImageId } =
    restaurants.info;

  // return (
  //   <div className="res-card">
  //     <img className="res-logo" src={cdn + cloudinaryImageId} />
  //     <h3>{name}</h3>
  //     <h4>{cuisines.join(", ")}</h4>
  //     <h4>{avgRating} stars</h4>
  //     <h4>{sla.deliveryTime} minutes</h4>
  //   </div>
  // );

  return (
    <Card
      sx={{
        maxWidth: 300,
        paddingX: 3,
        paddingY: 2,
        // border: "2px solid red",
        backgroundColor: "#f7d482",
        height: "400px",
        transition: "transform 0.2s ease box-shadow 0.2s ease",
        ":hover": {
          transform: "scale(1.03)",
          boxShadow: 8,
          borderColor: "orange",
        },
      }}
    >
      <CardMedia
        component="img"
        // height={50}
        // width={50}
        image={cdn + cloudinaryImageId}
        sx={{
          objectFit: "cover",
          height: 180,
          width: 250,
          boxShadow: 8,
          borderRadius: 1.5,
        }}
      />
      <CardContent>
        <Typography variant="h6" noWrap>
          {name}
        </Typography>
        <Typography variant="body1" noWrap>
          {cuisines.join(", ")}
        </Typography>
        <Typography variant="body2">Avg. Ratings: {avgRating}</Typography>
        <Typography variant="body2">
          Delivery Time {sla.deliveryTime} minutes
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RestaurantCard;
