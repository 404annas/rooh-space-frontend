import { Routes, Route } from "react-router-dom";
import Login from "../../client/pages/Login";
import Register from "../../client/pages/Register";
import ForgotPassword from "../../client/pages/ForgotPassword";
import Home from "../../client/pages/Home";
import UserProfile from "../../client/pages/UserProfile";
import About from "../../client/pages/About";
import Contact from "../../client/pages/Contact";
import Pricing from "../../client/pages/Pricing";

import ClientLayout from "../../client/layout/ClientLayout";
import ProtectedRoute from "./ProtectedRoute";

const ClientRoutes = () => {
    return (
        <Routes>

            {/* --- Public Routes without Navbar --- */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* --- Routes with Navbar --- */}
            <Route element={<ClientLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/pricing" element={<Pricing />} />

                {/* Protected pages */}
                <Route element={<ProtectedRoute />}>
                    <Route path="/profile" element={<UserProfile />} />
                </Route>
            </Route>
        </Routes>
    );
};

export default ClientRoutes;
