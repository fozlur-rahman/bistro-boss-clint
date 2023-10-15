
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import SignUp from "../pages/Login/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/Login/Login/Login";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Reservation from "../pages/Dashboard/Reservation/Reservation";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import AllUsers from "../pages/Dashboard/AllUses/AllUsers";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import Secret from "../pages/Home/Secret/Secret";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'ourMenu',
                element: <Menu></Menu>
            },
            {
                path: '/order',
                element: <Order></Order>
            },
            {
                path: '/order/:category',
                element: <PrivateRoute><Order></Order></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/secret',
                element: <PrivateRoute><Secret></Secret></PrivateRoute>
            }
        ]
    },

    // new layout (dashboard layout)
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: '',
                element: <UserHome></UserHome>
            },
            {
                path: 'reservation',
                element: <Reservation></Reservation>
            },
            {
                path: 'mycart',
                element: <MyCart></MyCart>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'payment-history',
                element: <PaymentHistory></PaymentHistory>
            },


            // admin routes
            {
                path: 'allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'addItem',
                element: <AdminRoute><AddItem></AddItem></AdminRoute>
            },
            {
                path: 'manageItems',
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
            }
        ]
    }
]);

