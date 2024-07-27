import { useNavigate } from "react-router-dom";
import { CDN_URL } from "../utils/constants"

const RestaurantCard = (props) => {

    const { resData } = props;
    const navigate = useNavigate();

    // const styleCard = {
    //     backgroundColor: "#F0F0F0"
    // }

    
    const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } = resData?.info;

    const clickHandler = () => {
      const id = resData?.info?.id||-1;
      navigate("/restaurants/" + id)
    }

    if(name.includes("Belgian Waffle")) {
      console.log(resData.info)
    }

  return (
    // adding inline css in react
    // <div className="res-card" style={styleCard}>
    <div data-testid = "restaurantCard" className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200" onClick={clickHandler}>
      <img
        className="rounded-lg"
        alt="res_logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name || "Meghana Foods"}</h3>
      <h4>{cuisines.join(", ") || "Fast food, chinese"}</h4>
      <h4>{avgRating || "4.4"} *</h4>
      <h4>{costForTwo || "$40 for two"}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

// Higher Order Component
// input - restaurantCard
// output - reestaurantCard with promoted label

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}


export default RestaurantCard;