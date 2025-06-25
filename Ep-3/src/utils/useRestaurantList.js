import { useEffect, useState } from "react";
import { resListApi } from "./constants";

const useRestaurantList = () => {
  const [resList, setResList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(resListApi);
    const json = await data?.json();

    setResList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return resList;
};

export default useRestaurantList;
