import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const { user,loading } = useContext(AuthContext)
    
    if (loading) {
        return <p className="text-center text-4xl font-bold my-5">Loading ....</p>
    }

    if (user?.email) {
        return children
    }
    return <Navigate to='/login' replace></Navigate>
};

export default PrivateRoute;