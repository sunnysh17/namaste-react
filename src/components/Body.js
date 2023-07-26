import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
//import resList from "../utils/mockData";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    //Creating a Local State Variables
    const [listOfRestaurants, setListOfRestaurant] = useState([]);

    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    //search box state variable
    const [searchText,setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    console.log("Body Rendered",listOfRestaurants);

    useEffect(()=>{
        //console.log("useEffect called");
        fetchData();
    },[]);

    //Function to fetch data from API
    const fetchData = async () =>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.6287557&lng=79.4191795&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING%22"
        );
        
        //concert data to json format
        const json  = await data.json();
        //console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // console.log(json);
        //Not a good practice
        //setListOfRestaurant(json.data.cards[2].data.data.cards);

        //Use Optional Chaining
        // setListOfRestaurant(json?.data?.cards[2]?.data?.data?.cards);
        setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };


    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) 
    return (
        <h2>Looks like you are offline,please check your internet connection</h2>
    );

    //Conditional rendering
    // if(listOfRestaurants.length === 0){
    //     return <Shimmer/>;
    // }

    return listOfRestaurants.length === 0 ? (
    <Shimmer/>
    ) : 
    (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" 
                    className="border border-solid border-black" 
                    value={searchText} 
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/>

                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{
                        //Filter the Restaurants Cards & Update the UI
                        //searchtext
                        console.log(searchText);

                        const filteredRestaurant = listOfRestaurants.filter(
                            (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())   
                        );
                        setFilteredRestaurant(filteredRestaurant);
                    }}>Search
                    </button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                <button 
                    className="px-4 py-2 bg-green-100 m-4 rounded-lg" 
                    onClick={() => {
                        //Filter logic here - Displaying restro with rating > 4
                        const filteredList = listOfRestaurants.filter(
                                (res) => res.info.avgRating > 4
                            );
                        setListOfRestaurant(filteredList);
                    }}>
                    Top Rated Restaurants
                </button>
                </div>
                
            </div>

            <div className="flex flex-wrap justify-center">
                {/* this will contain restro cards */}
                {listOfRestaurants.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
                    {/* {if the restaurant is promoted add a label to it} */
                        restaurant.info.promoted? 
                        (
                        <RestaurantCardPromoted resData={restaurant}/>
                        ) : 
                        (
                        <RestaurantCard  resData={restaurant}/>
                        )
                    }
                    </Link>
                ))}
            </div>
        </div>

    );
};

export default Body;