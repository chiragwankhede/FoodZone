import React ,{lazy ,Suspense}from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter ,RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact"
import Error from "./components/Error";
import Cart from "./components/Cart"
import RestuarantMenu from "./components/RestuarantMenu";



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
      },
      {
        path : "/restuarants/:resID",
        element : <RestuarantMenu/>
      }
    ],
    errorElement : <Error/>
  },
  
])







const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes}/>);
