import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../component/Shared/ErrorPage/ErrorPage";
import Home from "../component/Pages/Home/Home/Home";
import Login from "../component/Pages/Login/Login";
import Register from "../component/Pages/Register/Register";
import TaskDashboard from "../component/Pages/TaskDashboard/TaskDashboard";
import PrivateRoute from "./PrivateRouter";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },

            {
                path: "/dashboard",
                element: <PrivateRoute><TaskDashboard></TaskDashboard></PrivateRoute>
            },
        ],
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/register",
        element: <Register></Register>
    },
]);