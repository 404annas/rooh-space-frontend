import { useState } from "react";
import { useForm } from "react-hook-form";
import { useUserAuth } from "../hooks/useUserAuth";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { Mail, Lock, Eye, EyeOff, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import mainImage from "../../assets/images/mainImage.avif"

const Login = () => {
    const { handleLogin, isLoading, error } = useUserAuth();
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        handleLogin(data.email, data.password);
    };

    return (
        <div className="flex h-screen">
            {/* LEFT SIDE IMAGE */}
            <div className="w-1/2 h-full">
                <img
                    loading="lazy"
                    className="w-full h-full object-cover object-bottom"
                    src={mainImage}
                    alt="Mosque"
                />
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="w-1/2 flex justify-center items-center px-4 bg-gradient-to-br from-[#e9f0ec] via-white to-[#e9f0ec]">
                <div className="px-8 py-14 border rounded-xl max-w-xl w-full">
                    <div className="flex items-center gap-2 justify-center text-primary">
                        <MapPin className="bg-primaryLight text-white w-10 h-10 p-2.5 rounded-full" />
                        <Link to={"/"} className="text-4xl font-bold">RoohSpace</Link>
                    </div>
                    <h1 className="text-xl font-semibold pb-1 pt-10 text-secondary">
                        Welcome Back!
                    </h1>
                    <p class="text-primaryLight font-medium text-sm pb-4">
                        Sign in to find Salah spaces & share peaceful spots with others 🌿
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1">

                        {/* Email */}
                        <div>
                            <p className="text-sm text-secondary pb-1">Email*</p>
                            <Input
                                type="email"
                                placeholder="Email Address"
                                icon={Mail}
                                className={`${errors.email ? "border-red-500" : ""} outline-none focus:border-primaryLight focus:ring-1 focus:ring-primaryLight bg-transparent`}
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Enter a valid email",
                                    },
                                })}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm -mt-2 mb-2">{errors.email.message}</p>
                            )}
                        </div>

                        <div>
                            <p className="text-sm text-secondary pb-1">Password*</p>
                            {/* Password */}
                            <div className="relative w-full">
                                <Input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    icon={Lock}
                                    className={`${errors.password ? "border-red-500" : ""} outline-none focus:border-primaryLight focus:ring-1 focus:ring-primaryLight bg-transparent`}
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 6,
                                            message: "At least 6 characters required",
                                        },
                                    })}
                                />
                                <div
                                    className="absolute right-3 top-2.5 text-gray-400 hover:text-primaryLight cursor-pointer transition-all duration-300"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </div>
                            </div>
                            {errors.password && (
                                <p className="text-red-500 text-sm -mt-2 mb-2">{errors.password.message}</p>
                            )}
                        </div>

                        {/* Login Button */}
                        <Button disabled={isLoading} isLoading={isLoading} icon={ArrowRight} text="Sign In"
                            loadingText="Signing in..." className="mt-2">
                        </Button>

                        {/* Lines & Links */}
                        <div className="flex lg:flex-row gap-2 flex-col justify-between items-center mt-4 text-sm text-gray-500">
                            <Link to={"/forgot-password"} onClick={() => scrollTo(0, 0)} className="hover:text-primaryLight underline">Forgot Password?</Link>
                            <span>Account not exists? <Link to={"/register"} onClick={() => scrollTo(0, 0)} className="text-primaryLight font-semibold hover:underline">SignUp Now</Link></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
