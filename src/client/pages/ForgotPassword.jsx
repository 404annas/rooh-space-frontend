import { useState } from "react";
import { useForm } from "react-hook-form";
import { useUserAuth } from "../hooks/useUserAuth";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { Mail, ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

import mainImage from "../../assets/images/mainImage.avif"

const ForgotPassword = () => {
    const { handleForgotPassword, isLoading, error } = useUserAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [emailSent, setEmailSent] = useState(false);

    const onSubmit = async (data) => {
        await handleForgotPassword(data.email);
        setEmailSent(true);
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
                <div className="px-8 py-10 border rounded-xl max-w-xl w-full">

                    {/* Logo */}
                    <div className="flex items-center gap-2 justify-center text-primary">
                        <MapPin className="bg-primaryLight text-white w-10 h-10 p-2.5 rounded-full" />
                        <h1 className="text-4xl font-bold">RoohSpace</h1>
                    </div>

                    {/* Heading */}
                    <h1 className="text-xl font-semibold pb-1 pt-10 text-secondary text-center">
                        Forgot Your Password?
                    </h1>
                    <p className="text-primaryLight font-medium text-sm pb-4 text-center">
                        Enter your email to receive a password reset link 🌿
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">

                        {/* Email */}
                        <div>
                            <p className="text-sm text-secondary pb-1">Email</p>
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                icon={Mail}
                                className={`${errors.email ? "border-red-500" : ""} outline-none bg-transparent focus:border-primaryLight focus:ring-1 focus:ring-primaryLight`}
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

                        {/* Button */}
                        <Button disabled={isLoading} isLoading={isLoading} icon={ArrowRight} text="Send Reset Link"
                            loadingText="Sending...">
                        </Button>

                        {/* Success Message */}
                        {emailSent && !isLoading && (
                            <p className="text-primaryLight text-sm mt-2 text-center">
                                Reset link sent! Check your email.
                            </p>
                        )}

                        {/* Redirect */}
                        <div className="flex flex-col gap-1 justify-center items-center mt-4 text-sm text-gray-500 text-center">
                            <span>
                                Remembered your password? <Link to={"/login"} onClick={() => scrollTo(0, 0)} className="text-primaryLight font-semibold hover:underline">SignIn Now</Link>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
