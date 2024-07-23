import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
// import Shimmer from "./components/Shimmer";
// import Grocery from "./components/Grocery";

//lazy loading
const Grocery = lazy(() => import("./components/Grocery"))
const About = lazy(() => import("./components/About"))

const AppLayout = () => {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    const data = {
      name : "Shubham kaushik",
    }

    setUserInfo(data.name);
  },[]);

  return (
    <UserContext.Provider value={{loggedInUser: userInfo, setUserInfo}}>
      <div className="app">
          <Header />
          <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[
      {
        path:"/",
        element: <Body />
      }, 
      {
        path: '/grocery',
        element: <Suspense fallback={<h1>Loading...</h1>} ><Grocery /></Suspense>
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading...</h1>} ><About /></Suspense>
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path : '/restaurants/:resId',
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
