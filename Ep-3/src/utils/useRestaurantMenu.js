import { useEffect, useState } from "react";
import { restMenuAPI } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  // fetch data

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(restMenuAPI + resId);

    const json = await data.json();
    setResInfo(json);
  };
  return resInfo;
};

export default useRestaurantMenu;
