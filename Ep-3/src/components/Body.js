import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import TopButton from "./Button";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";
import { TextField, Button, Grid, Box } from "@mui/material";

const Body = () => {
  const [searchText, setsearchText] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);
  const onlineStatus = useOnlineStatus();
  const listOfRes = useRestaurantList(); //This hook contains a API call to fetch the data and return
  const shimmerArr = new Array(6);

  useEffect(() => {
    setFilteredRes(listOfRes);
  }, [listOfRes]);

  const top10Res = () => {
    const filtered = listOfRes.filter((res) => res.info.avgRating > 4.5);
    setFilteredRes(filtered);
  };

  const filterBySearch = () => {
    //  Filter based on search input
    const filteredRestaurant = listOfRes.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredRes(filteredRestaurant);
  };

  if (!onlineStatus) return <h1>Looks like you are Offline</h1>;

  return (
    <div className="body">
      <div
        className="search"
        style={{
          display: "flex",

          margin: "5px",
          padding: "10px",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Search.."
          variant="outlined"
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
          sx={{ margin: "0 5px 0 5px" }}
          size="small"
        ></TextField>
        <Button onClick={filterBySearch}>search</Button>
        <TopButton
          size="large"
          label={"Top rated Restaurants"}
          variant="contained"
          color="primary"
          sx={{
            padding: "8px 16px",
            fontSize: "16px",
            color: "white",
            backgroundColor: "#f8932e",
            margin: "0 5px 0 5px",
            // margin: "20px",
          }}
          onClick={top10Res}
        />
      </div>
      <Box
        sx={{
          width: "100%",
          padding: 2,
        }}
      >
        <Grid
          container
          spacing={3}
          justifyContent="center"
          // sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          {filteredRes.length === 0 ? (
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
              {Array(6)
                .fill(null)
                .map((index) => (
                  <Shimmer />
                ))}
            </Grid>
          ) : (
            filteredRes?.map((item, index) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} spacing={1}>
                  <Link key={index} to={"/restaurants/" + item.info.id}>
                    <RestaurantCard restaurants={item} />
                  </Link>
                </Grid>
              );
            })
          )}
        </Grid>
      </Box>
    </div>
  );
};

export default Body;
