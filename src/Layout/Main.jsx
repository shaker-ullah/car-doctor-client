import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Foooter/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Main;