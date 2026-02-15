import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const ClientLayout = () => {
    return (
        <>
            <Navbar />
            <div className="">
                <Outlet />
            </div>
        </>
    );
};

export default ClientLayout;
