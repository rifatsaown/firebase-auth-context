import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Home from "./Components/Home.jsx";
import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx";
import "./index.css";
import UserProvider from "./provider/UserProvider.jsx";
import PrivateRoutes from "../routes/PrivateRoutes.jsx";
import Profile from "./Components/Profile.jsx";
import PrivateRouteLogin from "../routes/PrivateRouteLogin.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <PrivateRouteLogin><Login /></PrivateRouteLogin>  },
      { path: "/register", element: <PrivateRouteLogin><Register /></PrivateRouteLogin> },
      { path: "/profile", element: <PrivateRoutes><Profile/></PrivateRoutes>},
      {
        path: "*",
        element: <h1 className="text-3xl text-center text-error">Not Found</h1>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
