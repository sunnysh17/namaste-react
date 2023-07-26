import { CDN_URL } from "../utils/constants"; // use curly brackets to import named exports

const RestaurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, name, avgRating, cuisines} = resData?.info; //Optional chaining - ?
    const {deliveryTime} = resData?.info?.sla;
    const {costForTwo} = resData?.info;
    
    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img 
            className="rounded-md"
            alt="res-logo"
            src={CDN_URL+cloudinaryImageId}
            />
            <h3 className="font-semibold py-2 text-lg">{name}</h3>
            <h4 className="text-sm">{cuisines.join(", ")}</h4>
            <h4 className="py-1"><i class="fa-regular fa-star"></i> {avgRating} stars</h4>
            <h4 className="py-1">{costForTwo} FOR TWO</h4>
            <h4 className="py-1"><i class="fa-regular fa-clock"></i> {deliveryTime} minutes</h4>
        </div>
    );
};

//Higher Order Components
//input - Restaurant Card => Restaurant Card Promoted
export const withPromotedLabel = (RestaurantCard) => { 
    return (props) => {
        return  (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        );
    }
}

export default RestaurantCard;