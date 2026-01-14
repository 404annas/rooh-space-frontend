import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAdminLoginMutation, useAdminLogoutMutation } from "../../admin/features/auth/adminApiSlice";
import { setAdminCredentials } from "../../admin/features/auth/adminAuthSlice";
import { toast } from "sonner";

export const useAdminAuth = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [loginApi, { isLoading: isLoginLoading }] = useAdminLoginMutation();
    const [logoutApi, { isLoading: isLogoutLoading }] = useAdminLogoutMutation();

    const [error, setError] = useState(null);

    const handleLogin = async (credentials) => {
        try {
            setError(null);
            const adminData = await loginApi(credentials).unwrap();
            dispatch(setAdminCredentials({ ...adminData }));
            toast.success("Admin Login successful");
            navigate("/admin/dashboard");
        } catch (error) {
            setError(error?.data?.message || "Admin Login failed");
            toast.error(error?.data?.message || "Admin Login failed");
        }
    }

    const handleLogout = async () => {
        try {
            setError(null);
            await logoutApi().unwrap();
            dispatch(setAdminCredentials({}));
            toast.success("Admin Logout successful");
            navigate("/admin/login");
        } catch (error) {
            setError(error?.data?.message || "Admin Logout failed");
            toast.error(error?.data?.message || "Admin Logout failed");
        }
    }

    return {
        handleLogin,
        handleLogout,
        isLoading: isLoginLoading || isLogoutLoading,
        error,
    }
}