import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header";
import Body from "./components/Body";
import { createBrowserRouter ,RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact"
import Error from "./components/Error";
import Cart from "./components/Cart"


const Applayout = () => {
  return <div className="app">
  <Header/>
  <Outlet/>



  </div>;
  
};




const appRoutes = createBrowserRouter([
  {
    path :"/",
    element: <Applayout/>,
    children:[
      {
        path :"/",
        element: <Body/>
      },
      {
        path :"/about",
        element : <About/>
      },
      {
        path : "/contact",
        element : <Contact/>
      },
      {
        path : "/cart",
        element : <Cart/>
      }
    ],
    errorElement : <Error/>
  },
  
])







const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes}/>);
