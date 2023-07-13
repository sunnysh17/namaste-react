import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
const HeaderComponent = () =>{

    //let btnName = "Login"; -- > Normal JS Variable

    const [btnNameReact,setBtnNameReact] = useState("Login"); // State Variable
    console.log("Header rendered");

    //if no dependency array => useEffect is called on every component render
    //if the dependency array is empty []=> useEffect is called on only initial render & (just once)
    //if depedency array is [btnNameReact] => called everytime btnNameReact is updated.
    useEffect(() =>{
        console.log("useEffect called");
    },[btnNameReact]); //
    
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login" 
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