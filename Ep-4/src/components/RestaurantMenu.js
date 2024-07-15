import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams()

    const resInfo = useRestaurantMenu(resId)

    if(resInfo === null) return <Shimmer />

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
    let n = resInfo?.cards.length;
    const menu = resInfo?.cards[resInfo?.cards.length-1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || resInfo?.cards[resInfo?.cards.length-1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    // const menu = resInfo?.cards[resInfo?.cards.length-1]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    // console.log("menu is testing : ", resInfo?.cards[resInfo.cards.length - 1]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    return  ( 
            <div className="menu">
                <h1> {name} </h1>
                <h2> {cuisines.join(", ")} - {costForTwoMessage} </h2>
                <h3> {costForTwoMessage} </h3>
                <ul>
                    {menu?.map((card) => {
                        let data = card.card.info;
                        return <li key={data.id}>{data.name} - Rs. {data.price/100 || data.defaultPrice/100}</li>
                    })}
                </ul>
            </div>
        )
   
    
    
}

export default RestaurantMenu;