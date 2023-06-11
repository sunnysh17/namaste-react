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

const RestaurantCard = (props) => {
    const {resData} = props;
    return (
        <div className="res-card" style={{ backgroundColor:"#f0f0f0" }}>
            <img 
            className="res-logo"
            alt="res-logo"
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/p9fv8plp2ievunbvvfge" 
            />
            <h3>{resData.data.name}</h3>
            <h4>{resData.data.cuisines.join(", ")}</h4>
            <h4>{resData.data.avgRating} stars</h4>
            <h4>₹{resData.data.costForTwo/100} FOR TWO</h4>
            <h4>{resData.data.deliveryTime} minutes</h4>
        </div>
    );
};

const resObj = {
    "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "25610",
                  "name": "Balaji Food Court",
                  "uuid": "f752387f-7752-4938-9666-cbc2c582f6c4",
                  "city": "5",
                  "area": "Thane Panchpakhadi",
                  "totalRatingsString": "10000+ ratings",
                  "cloudinaryImageId": "mx2xvec1dkyu8yxor1ml",
                  "cuisines": [
                    "North Indian",
                    "Chinese",
                    "Juices",
                    "Continental",
                    "Ice Cream",
                    "South Indian"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 25000,
                  "costForTwoString": "₹250 FOR TWO",
                  "deliveryTime": 40,
                  "minDeliveryTime": 40,
                  "maxDeliveryTime": 40,
                  "slaString": "40 MINS",
                  "lastMileTravel": 3.700000047683716,
                  "slugs": {
                    "restaurant": "balaji-food-court-panch-pakhadi-thane-west-thane",
                    "city": "mumbai"
                  },
                  "cityState": "5",
                  "address": "Shop 4 & 5, Sital Premises, Panch Pakhadi, Thane West",
                  "locality": "Panch Pakhadi",
                  "parentId": 40639,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "ribbon": [
                    {
                      "type": "PROMOTED"
                    }
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 3500,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 3500,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3500",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "cid=6900722~p=1~eid=00000188-a8cd-5ca8-10c0-9063004c0148",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "3.7 kms",
                  "hasSurge": false,
                  "aggregatedDiscountInfoV3": {
                    "header": "20% OFF",
                    "subHeader": "UPTO ₹50",
                    "discountTag": "",
                    "headerTypeV2": 0
                  },
                  "loyaltyDiscoverPresentationInfo": {
                    "logoCtx": {
                      "text": "BENEFITS",
                      "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                    },
                    "freedelMessage": "FREE DELIVERY",
                    "exclusiveOfferMessage": ""
                  },
                  "sla": {
                    "restaurantId": "25610",
                    "deliveryTime": 40,
                    "minDeliveryTime": 40,
                    "maxDeliveryTime": 40,
                    "lastMileTravel": 3.700000047683716,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": true,
                  "avgRating": "4.2",
                  "totalRatings": 10000,
                  "new": false
                },
                "subtype": "basic"
};

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {/* this will contain restro cards */}
                <RestaurantCard resData={resObj}/>
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