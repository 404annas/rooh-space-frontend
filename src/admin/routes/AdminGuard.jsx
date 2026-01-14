import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminGuard = () => {
    const { adminInfo } = useSelector((state) => state.auth);

    if (adminInfo && adminInfo.role === 'admin') {
        return <Outlet />;
    } else {
        return <Navigate to="/admin/login" replace />;
    }
};

export default AdminGuard;