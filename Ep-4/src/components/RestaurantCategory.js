import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
    const {title, itemCards} = props.data;
    const showItems = props.showItems;
    const { setShowIndex } = props;

    const handleClick = () => {
        setShowIndex();
    }

    return <div>
        {/* Header */}
        <div className="lg:w-full xl:w-6/12 md:w-full sm:w-full mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
            <div className="flex justify-between p-3 " onClick={handleClick}>
                <span className="font-bold text-lg">{title}({itemCards?.length})</span>
                <span className="font-bold text-lg"> {showItems ? "-" : "+"} </span>
            </div>
            
            {showItems && <ItemList items={itemCards} />}
        </div>
        
    </div>
}

export default RestaurantCategory