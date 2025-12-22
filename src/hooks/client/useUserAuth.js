import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation, useRegisterMutation, useForgotPasswordMutation } from "../../features/client/auth/userApiSlice";
import { setCredentials } from "../../features/client/auth/authSlice";
import { toast } from "sonner";

export const useUserAuth = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [loginApi, { isLoading: isLoginLoading }] = useLoginMutation();
    const [registerApi, { isLoading: isRegisterLoading }] = useRegisterMutation();
    const [forgotPasswordApi, { isLoading: isForgotLoading }] = useForgotPasswordMutation();

    const [error, setError] = useState(null);

    const handleLogin = async (credentials) => {
        try {
            setError(null);
            const userData = await loginApi(credentials).unwrap();
            dispatch(setCredentials({ ...userData }));
            toast.success("Login successful");
            navigate("/");
        } catch (error) {
            setError(error?.data?.message || "Login failed");
            toast.error(error?.data?.message || "Login failed");
        }
    }

    const handleRegister = async (name, email, password) => {
        try {
            setError(null);
            const userData = await registerApi({ name, email, password }).unwrap();
            dispatch(setCredentials({ ...userData }));
            toast.success("Registration successful");
            navigate("/");
        } catch (err) {
            setError(err?.data?.message || "Registration failed");
            toast.error(err?.data?.message || "Registration failed");
        }
    };

    const handleForgotPassword = async (email) => {
        try {
            setError(null);
            const response = await forgotPasswordApi({ email }).unwrap();
            toast.success(response.message || "Reset link sent to your email!");
            navigate("/login");
        } catch (err) {
            setError(err?.data?.message || "Something went wrong");
            toast.error(err?.data?.message || "Failed to send reset link");
        }
    };

    return {
        handleLogin,
        handleRegister,
        handleForgotPassword,
        isLoading: isLoginLoading || isRegisterLoading || isForgotLoading,
        error,
    }
}