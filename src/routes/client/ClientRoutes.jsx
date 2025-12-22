import { Routes, Route } from "react-router-dom";
import Login from "../../pages/client/Login";
import Register from "../../pages/client/Register";
import ForgotPassword from "../../pages/client/ForgotPassword";
import Home from "../../pages/client/Home";
import UserProfile from "../../pages/client/UserProfile";
import About from "../../pages/client/About";
import Contact from "../../pages/client/Contact";

import ClientLayout from "../../layouts/client/ClientLayout";
import ProtectedRoute from "./ProtectedRoute";
import Pricing from "../../pages/client/Pricing";

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
