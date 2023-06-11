import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
    return (
        <div className="body">
            <div className="filter">
                <button 
                    className="filter-btn" 
                    onClick={() => {console.log("Btn clicked")}}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {/* this will contain restro cards */}
                {resList.map((restaurant) => (
                    <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
                ))}
            </div>
        </div>

    );
};

export default Body;