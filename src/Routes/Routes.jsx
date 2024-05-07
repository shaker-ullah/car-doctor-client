import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from '../Home/Login/Login'
import SignUp from '../Home/Login/SignUp'
import Home from '../Pages/Home/Home'

import BookService from "../Pages/Checkout/BookService";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp />
            },
            {
                path: '/bookings',
                element: <PrivateRoute> <Bookings />
                </PrivateRoute>
            },

            {
                path: '/book/:id',
                element: <BookService />,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            }
        ]
    }
])

export default router