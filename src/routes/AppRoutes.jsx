import { Routes, Route, Navigate } from "react-router-dom";
import ClientRoutes from "./client/ClientRoutes";
import AdminRoutes from "./admin/AdminRoutes";

const AppRoutes = () => {
    return (
        <Routes>
            {/* 1. Admin Traffic */}
            {/* Any URL starting with /admin goes to AdminRoutes */}
            <Route path="/admin/*" element={<AdminRoutes />} />

            {/* 2. Client Traffic */}
            {/* Any other URL goes to ClientRoutes */}
            <Route path="/*" element={<ClientRoutes />} />

            {/* 3. Catch All (404) */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default AppRoutes;