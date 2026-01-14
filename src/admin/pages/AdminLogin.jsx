import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAdminAuth } from "../../admin/hooks/useAdminAuth";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { Mail, Lock, Eye, EyeOff, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import mainImage from "../../assets/images/mainImage.avif"

const AdminLogin = () => {
    const { handleLogin, isLoading, error } = useAdminAuth();
    const [showPassword, setShowPassword] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        handleLogin({ email: data.email, password: data.password });
    };

    return (
        <div className="flex h-screen bg-gray-100">

            {/* LEFT SIDE IMAGE / GRAPHIC */}
            <div className="w-1/2 h-full hidden lg:block">
                <img
                    loading="lazy"
                    src={mainImage}
                    alt="Admin Dashboard"
                    className="w-full h-full object-cover object-bottom"
                />
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="w-full lg:w-1/2 flex justify-center items-center px-6 bg-gradient-to-br from-gray-50 via-white to-gray-100">
                <div className="p-10 rounded-xl border w-full max-w-xl">

                    {/* Admin Logo / Icon */}
                    <div className="flex items-center justify-center mb-6">
                        <ShieldCheck className="text-primary w-12 h-12 mr-2" />
                        <h1 className="text-3xl font-bold text-primary">Admin Portal</h1>
                    </div>

                    <p className="text-secondary mb-6 text-center">
                        Sign in with your admin account to manage the platform
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">

                        {/* Email */}
                        <div>
                            <p className="text-sm text-secondary pb-1">Email*</p>
                            <Input
                                type="email"
                                placeholder="admin@example.com"
                                icon={Mail}
                                className={`${errors.email ? "border-red-500" : "border-gray-300"} outline-none bg-transparent focus:border-primaryLight focus:ring-1 focus:ring-primaryLight`}
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Enter a valid email",
                                    },
                                })}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm -mt-2">{errors.email.message}</p>
                            )}
                        </div>

                        {/* Password */}
                        <div>
                            <p className="text-sm text-secondary pb-1">Password*</p>
                            <div className="relative w-full">
                                <Input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter password"
                                    icon={Lock}
                                    className={`${errors.password ? "border-red-500" : "border-gray-300"} outline-none bg-transparent focus:primaryLight focus:ring-1 focus:ring-primaryLight`}
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
                                <p className="text-red-500 text-sm -mt-2">{errors.password.message}</p>
                            )}
                        </div>

                        {/* Login Button */}
                        <Button
                            disabled={isLoading}
                            isLoading={isLoading}
                            icon={ArrowRight}
                            text="Login"
                            loadingText="Signing in..."
                        />

                        {/* Links */}
                        <div className="mt-4 text-sm text-gray-500">
                            <span>
                                Not an admin? <Link to={"/"} onClick={() => scrollTo(0,0)} className="text-primary font-semibold hover:underline">Go Home</Link>
                            </span>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
