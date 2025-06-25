import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import TopButton from "./Button";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
  const [searchText, setsearchText] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);
  const onlineStatus = useOnlineStatus();
  const listOfRes = useRestaurantList(); //This hook contains a API call to fetch the data and return

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
      <div className="search">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        ></input>
        <button onClick={filterBySearch}>search</button>
        <TopButton
          size="large"
          label={"Top rated Restaurants"}
          variant="contained"
          color="primary"
          sx={{
            padding: "8px 16px",
            fontSize: "16px",
            color: "white",
            margin: "20px",
          }}
          onClick={top10Res}
        />
      </div>
      <div className="res-container">
        {filteredRes.length === 0 ? (
          <Shimmer />
        ) : (
          filteredRes?.map((item, index) => {
            return (
              <Link key={index} to={"/restaurants/" + item.info.id}>
                <RestaurantCard restaurants={item} />
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Body;
