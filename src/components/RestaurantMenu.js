import { useEffect, useState } from "react";
import Shimmer from "../components/Shimmer";
import {useParams} from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () =>{

    const {resId} = useParams(); //coming from root page app.js

    //Code to fetch the data from api is present in this hook
    const resInfo = useRestaurantMenu(resId); //custom hook - how to get the data is abstracted

    if(resInfo === null) return <Shimmer/>;
    
    const {name,cuisines,costForTwoMessage,avgRating} = resInfo?.cards[0]?.card.card.info;

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);

    //if resInfo is null then display Shimmer else resInfo.
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")} - {costForTwoMessage}</h3>
            <h4>{avgRating}</h4>
            <h3>Menu</h3>
            <ul>
                {itemCards.map((item)=> 
                <li key={item.card.info.id}>{item.card.info.name} -{" Rs. "} {item.card.info.price/100 || item.card.info.deafultPrice}</li>)}
                {/* <li>{itemCards[0].card.info.name}</li>
                <li>{itemCards[1].card.info.name}</li> */}
            </ul>
        </div>
    );
};
export default RestaurantMenu;