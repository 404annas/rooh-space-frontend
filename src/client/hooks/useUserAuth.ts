import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation, useRegisterMutation, useForgotPasswordMutation, useLogoutMutation } from "../features/auth/userApiSlice";
import { clearCredentials, setCredentials } from "../features/auth/authSlice";
import { toast } from "sonner";

export const useUserAuth = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [loginApi, { isLoading: isLoginLoading }] = useLoginMutation();
    const [registerApi, { isLoading: isRegisterLoading }] = useRegisterMutation();
    const [forgotPasswordApi, { isLoading: isForgotLoading }] = useForgotPasswordMutation();
    const [logoutApi, { isLoading: isLogoutLoading }] = useLogoutMutation();

    const [error, setError] = useState<string | null>(null);

    const handleLogin = async (email: string, password: string) => {
        try {
            setError(null);
            const userData = await loginApi({ email, password }).unwrap();
            dispatch(setCredentials({ ...userData }));
            toast.success("Login successful");
            navigate("/");
        } catch (error: any) {
            setError(error?.data?.message || "Login failed");
            toast.error(error?.data?.message || "Login failed");
        }
    }

    const handleRegister = async (name: string, email: string, password: string, confirmPassword: string) => {
        try {
            setError(null);
            const userData = await registerApi({ name, email, password, confirmPassword }).unwrap();
            dispatch(setCredentials({ ...userData }));
            toast.success("Registration successful");
            navigate("/");
        } catch (err: any) {
            setError(err?.data?.message || "Registration failed");
            toast.error(err?.data?.message || "Registration failed");
        }
    };

    const handleLogout = async () => {
        try {
            setError(null);
            const loggedOutUser = await logoutApi().unwrap();
            dispatch(clearCredentials())
            toast.success(loggedOutUser?.message || "Logout Successfull")
            navigate("/login")
        } catch (err: any) {
            setError(err?.data?.message || "Logout failed");
            toast.error(err?.data?.message || "Logout failed");
        }
    }

    const handleForgotPassword = async (email: string) => {
        try {
            setError(null);
            const response = await forgotPasswordApi({ email }).unwrap();
            toast.success(response.message || "Reset link sent to your email!");
            navigate("/login")
        } catch (err: any) {
            setError(err?.data?.message || "Something went wrong");
            toast.error(err?.data?.message || "Failed to send reset link");
        }
    };

    return {
        handleLogin,
        handleRegister,
        handleForgotPassword,
        handleLogout,
        isLoading: isLoginLoading || isRegisterLoading || isForgotLoading || isLogoutLoading,
        error,
    }
}