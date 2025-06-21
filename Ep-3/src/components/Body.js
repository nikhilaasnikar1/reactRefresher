import { restaurants } from "./RestaurantsData";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import TopButton from "./Button";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const Body = () => {
  const [listOfRes, setlistOfRes] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data?.json();

    setlistOfRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

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
        <button
          onClick={() => {
            //  Filter based on search input
            const filteredRestaurant = listOfRes.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );

            setFilteredRes(filteredRestaurant);
          }}
        >
          search
        </button>
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
          onClick={() => {
            const filtered = listOfRes.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredRes(filtered);
          }}
        />
      </div>
      <div className="res-container">
        {listOfRes?.length === 0 ? (
          <Shimmer />
        ) : (
          filteredRes?.map((item, index) => {
            console.log(item);
            return (
              <Link to={"/restaurants/" + item.info.id}>
                <RestaurantCard key={index} restaurants={item} />
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Body;
