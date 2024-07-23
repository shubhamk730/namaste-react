import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const { resId } = useParams()
    const [showIndex, setShowIndex] = useState(0);

    const resInfo = useRestaurantMenu(resId)

    if(resInfo === null) return <Shimmer />

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
    let n = resInfo?.cards.length;
    const menu = resInfo?.cards[resInfo?.cards.length-1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || resInfo?.cards[resInfo?.cards.length-1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    // const menu = resInfo?.cards[resInfo?.cards.length-1]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    // console.log(resInfo?.cards[resInfo.cards.length - 1]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const categories = resInfo?.cards[resInfo.cards.length - 1]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => {
        // return c.card.card['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory' || c.card.card['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory';
        return c.card.card['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory';
    })

    // console.log("Categories are : ", categories)

    return  ( 
            <div className="text-center">
                <h2 className="font-bold my-5 text-2xl">{name}</h2>
                <p className="font-bold text-lg"> {cuisines.join(", ")} - {costForTwoMessage} </p>
                <p className="font-bold"> {costForTwoMessage} </p>
                {categories.map((category, idx) => {
                    // if(category.card.card.type === 'type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory') {
                    //     console.log("Nested category found :", category)
                    //     return <div>
                    //         <h3>{category.card.card.title}</h3>
                    //         {category.card.card.categories.map(nestedCategory => {
                    //             console.log("Nested Category is : ", nestedCategory)
                    //             return <RestaurantCategory data={nestedCategory} />
                    //         })}
                    //     </div>
                    // } else {
                    //     return <RestaurantCategory data = {category.card.card} />
                    // }

                    return <RestaurantCategory data = {category.card.card} key ={idx} showItems={showIndex === idx} setShowIndex={() => {
                        showIndex === idx ? setShowIndex(null) :setShowIndex(idx)}}/>
                    
                })}
            </div>
        )
   
    
    
}

export default RestaurantMenu;