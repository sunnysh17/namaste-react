import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const HeaderComponent = () =>{

    //let btnName = "Login"; -- > Normal JS Variable

    const [btnNameReact,setBtnNameReact] = useState("Login"); // State Variable
    console.log("Header rendered");

    const onlineStatus = useOnlineStatus();

    //if no dependency array => useEffect is called on every component render
    //if the dependency array is empty []=> useEffect is called on only initial render & (just once)
    //if depedency array is [btnNameReact] => called everytime btnNameReact is updated.
    useEffect(() =>{
        console.log("useEffect called");
    },[btnNameReact]); //
    
    return (
        <div className="flex justify-between bg-orange-100 shadow-lg mb-2">
            <div className="logo-container">
                <img className="w-32" src={LOGO_URL}/>
            </div>
            <div className="nav-items flex items-center">
                <ul className="flex p-4 m-5">
                    <li className="px-4">
                        Online Status: {onlineStatus ? "✅":"🛑"}
                    </li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4"><Link to="/">🏠 Home</Link></li>
                    <li className="px-4"><Link to="/about">ℹ️ About Us</Link></li>
                    <li className="px-4"><Link to="/contact">📞 Contact Us</Link></li>
                    <li className="px-4">🛒 Cart</li>
                    <button className="login  bg-green-200 rounded-lg" 
                    onClick={()=> {
                       btnNameReact === "Login" ? setBtnNameReact("Logout"):setBtnNameReact("Login"); //this is how you update the state variable
                    }}>
                    {btnNameReact}</button>
                </ul>
            </div>
        </div> 
    );
};

export default HeaderComponent;