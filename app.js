import React from "react";
import ReactDOM  from "react-dom/client";

//React Component
const HeaderComponent = () =>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div> 
    );
};

const RestaurantCard = () => {
    return (
        <div className="res-card" style={{ backgroundColor:"#f0f0f0" }}>
            <img 
            className="res-logo"
            alt="res-logo"
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/p9fv8plp2ievunbvvfge" 
            />
            <h3>Meghana Foods</h3>
            <h4>North Indian, Asian</h4>
            <h4>4.5 stars</h4>
            <h4>38 minutes</h4>
        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {/* this will contain restro cards */}
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>

    );
};

const AppLayout = () =>{
    return (
        <div className="app">
            <HeaderComponent/>
            <Body/>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);