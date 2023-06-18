import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const HeaderComponent = () =>{

    //let btnName = "Login"; -- > Normal JS Variable

    const [btnNameReact,setBtnNameReact] = useState("Login"); // State Variable

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
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