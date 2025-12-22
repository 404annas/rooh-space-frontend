import { useState } from "react";
import { useForm } from "react-hook-form";
import { useUserAuth } from "../../hooks/client/useUserAuth";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { Mail, Lock, Eye, EyeOff, MapPin, ArrowRight, UserRound } from "lucide-react";
import { Link } from "react-router-dom";

import mainImage from "../../assets/images/mainImage.avif"

const Register = () => {
  const { handleRegister, isLoading } = useUserAuth();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    handleRegister(data.name, data.email, data.password);
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
        <div className="px-8 py-6 border rounded-xl max-w-xl w-full">

          {/* Logo */}
          <div className="flex items-center gap-2 justify-center text-primary">
            <MapPin className="bg-primaryLight text-white w-10 h-10 p-2.5 rounded-full" />
            <h1 className="text-4xl font-bold">RoohSpace</h1>
          </div>

          {/* Heading */}
          <h1 className="text-xl font-semibold pb-1 pt-10 text-secondary">
            Create Your Account
          </h1>
          <p className="text-primaryLight font-medium text-sm pb-4">
            Join RoohSpace to discover & share peaceful Salah spots 🌿
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">

            {/* Full Name */}
            <div>
              <p className="text-sm text-secondary pb-1">Full Name*</p>
              <Input
                type="text"
                placeholder="John Doe"
                icon={UserRound}
                className={`${errors.name ? "border-red-500" : ""} outline-none bg-transparent focus:border-primaryLight focus:ring-1 focus:ring-primaryLight`}
                {...register("name", {
                  required: "Name is required",
                })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm -mt-2 mb-2">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <p className="text-sm text-secondary pb-1">Email*</p>
              <Input
                type="email"
                placeholder="johndoe@gmail.com"
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

            {/* Password */}
            <div>
              <p className="text-sm text-secondary pb-1">Password*</p>
              <div className="relative w-full">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  icon={Lock}
                  className={`${errors.password ? "border-red-500" : ""} outline-none bg-transparent focus:border-primaryLight focus:ring-1 focus:ring-primaryLight`}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "At least 6 characters required",
                    },
                  })}
                />
                <div
                  className="absolute right-3 top-2.5 text-gray-400 hover:text-primaryLight cursor-pointer transition-all"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </div>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm -mt-2 mb-2">{errors.password.message}</p>
              )}
            </div>

            {/* Register Button */}
            <Button disabled={isLoading} isLoading={isLoading} icon={ArrowRight} text="Create Account"
              loadingText="Signing up..." className="mt-2">
            </Button>

            {/* Redirect */}
            <div className="flex flex-col gap-1 justify-between items-center mt-4 text-sm text-gray-500">
              <p>By creating an account, you agree to our Terms and Privacy Policy!</p>
              <span>Already have an account? <Link to={"/login"} onClick={() => scrollTo(0,0)} className="text-primaryLight font-semibold hover:underline">SignIn Now</Link></span>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
