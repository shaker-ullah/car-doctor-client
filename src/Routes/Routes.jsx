import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from '../Home/Login/Login'
import SignUp from '../Home/Login/SignUp'
import Home from '../Pages/Home/Home'
import CheckOut from "../Pages/Checkout/CheckOut";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                index: true,
                element:<Home></Home>
            },
            {
                path: '/login',
                element:  <Login></Login>
            },
            {
                path: '/signUp',
                element:  <SignUp/>
            },
            {
                path: '/checkout/:id',
                element: <CheckOut />,
                loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            }
        ]
    }
])

export default router