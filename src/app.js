import React, { lazy,Suspense } from "react";
import ReactDOM  from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Grocery from "./components/Grocery";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Grocery from "./components/Grocery";
//React Component

//lazy loading grocery
//const Grocery = lazy(()=> import("./components/Grocery"));

const AppLayout = () =>{
    return (
        <div className="app">
            <HeaderComponent/>
            <Outlet />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/", //Root Route Path
        element: <AppLayout/>,
        children:[
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/about",
                element: <About/>,
            },                           //Children of App Layout
            {
                path: "/contact", 
                element: <Contact/>,
            },
            {
                path: "/grocery",
                element:<Grocery/>,
                //<Suspense fallback={<h1>Loading...</h1>}>
                //         <Grocery/>
                //     </Suspense>,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>,
            }
        ],
        errorElement: <Error/>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter}/>);