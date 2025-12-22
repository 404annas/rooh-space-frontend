import { Outlet } from "react-router-dom";
import Navbar from "../../components/client/Navbar";

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
