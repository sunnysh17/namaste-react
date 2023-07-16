import RestaurantCard from "./RestaurantCard";
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

    useEffect(()=>{
        //console.log("useEffect called");
        fetchData();
    },[]);

    //Function to fetch data from API
    const fetchData = async () =>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.191389&lng=72.9441772&page_type=DESKTOP_WEB_LISTING"
        );
        
        //concert data to json format
        const json  = await data.json();
        console.log(json);
        //Not a good practice
        //setListOfRestaurant(json.data.cards[2].data.data.cards);

        //Use Optional Chaining
        setListOfRestaurant(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
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
    ) : (
        <div className="body">

            <div className="filter">
                <div className="search">
                    <input type="text" 
                    className="search-box" 
                    value={searchText} 
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/>

                    <button onClick={()=>{
                        //Filter the Restaurants Cards & Update the UI
                        //searchtext
                        console.log(searchText);

                        const filteredRestaurant = listOfRestaurants.filter(
                            (res)=> res.data.name.toLowerCase().includes(searchText.toLowerCase())   
                        );
                        setFilteredRestaurant(filteredRestaurant);
                    }}>Search</button>
                </div>
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
                {filteredRestaurant.map((restaurant) => (
                    <Link key={restaurant.data.id} to={"/restaurants/"+restaurant.data.id}><RestaurantCard  resData={restaurant}/></Link>
                ))}
            </div>
        </div>

    );
};

export default Body;