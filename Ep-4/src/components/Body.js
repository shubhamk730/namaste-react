import { useContext, useEffect, useState } from "react";
// import { resArrays } from "../utils/mockData";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRes, setListofRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");
  const onlineStatus = useOnlineStatus();
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const { loggedInUser, isAdmin, setUserInfo } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const searchHandler = () => {
    if (searchTxt === "") {
      setFilteredRes(listOfRes);
    }
    const result = listOfRes.filter((res) => {
      return res.info.name.toLowerCase().includes(searchTxt.toLowerCase());
    });
    setFilteredRes(result);
  };

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6085535&lng=77.0971203&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const res = await data.json();
    // console.log(res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    const resList =
      res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListofRes(resList);
    setFilteredRes(resList);
  };

  const getRandomBoolean = () => Math.random() >= 0.5;

  if (!onlineStatus)
    return <h1>You are offline. Please check your internet coonnection.</h1>;

  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="filter flex">
        <div className="m-4 p-4">
          <input
            className="border border-solid px-4 py-1 border-black"
            type="text"
            value={searchTxt}
            onChange={(e) => setSearchTxt(e.target.value)}
          />
          <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={searchHandler}>
            {" "}
            Search{" "}
          </button>
        </div>

        <div className=" m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = listOfRes.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRes(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>

        <div className=" m-4 p-4 flex items-center">
          <label> Set Username : </label>
          <input className="border border-solid px-4 py-1 m-1 border-black"
            type="text" onChange={(e) => setUserInfo(e.target.value)} value={loggedInUser} />
        </div>
      </div>

      

      <div className="flex flex-wrap">
        {filteredRes.map((item) => {
          return getRandomBoolean() ? <RestaurantCardPromoted resData={item} key={item.info.id} /> : <RestaurantCard resData={item} key={item.info.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;
