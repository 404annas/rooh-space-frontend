import { Routes, Route } from "react-router-dom";
import AdminGuard from "./AdminGuard";
import AdminLogin from "../../pages/admin/AdminLogin";

// Dummy components for now
const Dashboard = () => <h1>Admin Dashboard</h1>;

const AdminRoutes = () => {
    return (
        <Routes>
            {/* Public Admin Route */}
            <Route path="/login" element={<AdminLogin />} />

            {/* --- Protected Admin Area --- */}
            <Route element={<AdminGuard />}>
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>
        </Routes>
    );
};

export default AdminRoutes;