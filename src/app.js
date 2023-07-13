import React from "react";
import ReactDOM  from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
//React Component


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
        ],
        errorElement: <Error/>,
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter}/>);