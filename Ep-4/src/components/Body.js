import { useEffect, useState } from "react";
// import { resArrays } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

  const [listOfRes, setListofRes] = useState([])
  const [filteredRes, setFilteredRes] = useState([])
  const [searchTxt, setSearchTxt] = useState("");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  },[])

  const searchHandler = () => {
    if(searchTxt === "") {
      setFilteredRes(listOfRes);
    }
    const result = listOfRes.filter(res => {
      return res.info.name.toLowerCase().includes(searchTxt.toLowerCase());
    })
    setFilteredRes(result)

  }

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const res = await data.json();
    // console.log(res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    const resList = res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListofRes(resList);
    setFilteredRes(resList);
  }

    if(!onlineStatus) return <h1>You are offline. Please check your internet coonnection.</h1>

    return listOfRes.length === 0 ? <Shimmer /> :(
      <div>
        <div className="filter">
          <div className="search">
            <input type="text" className="search-box" value={searchTxt} onChange={(e) => setSearchTxt(e.target.value)} /> 
            <button onClick={searchHandler} className="search-btn"> Search </button>

          </div>
          <button onClick={() => {
             setListofRes(() => {
              let ans = listOfRes.filter(res => {
                return res.info.avgRating > 4.4
              })

              return ans;
             })
            }
          } className="filter-btn"> Top Rated Restaurants </button>
        </div>
  
        <div className="res-container">
          {filteredRes.map((item) => {
              return <RestaurantCard resData = {item} key = {item.info.id} />
          })}
        </div>
      </div>
    );
  };

  export default Body;