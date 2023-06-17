import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState} from "react";

const Body = () => {
    //Creating a Local State Variables
    const [listOfRestaurants, setListOfRestaurant] = useState(resList);

    return (
        <div className="body">
            
            <div className="filter">
                <button 
                    className="filter-btn" 
                    onClick={() => {
                        //Filter logic here - Displaying restro with rating > 4
                        const filteredList = listOfRestaurants.filter(
                                (res) => res.data.avgRating > 4
                            );
                        setListOfRestaurant(filteredList);
                    }}>
                    Top Rated Restaurants
                </button>
            </div>

            <div className="res-container">
                {/* this will contain restro cards */}
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
                ))}
            </div>
        </div>

    );
};

export default Body;