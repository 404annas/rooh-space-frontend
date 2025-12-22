import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { Mail, UserRound, ChevronDown, ArrowRight, Clock, Phone } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);
    const queries = [
        "Report a Space",
        "Feedback",
        "Bug Report",
        "Feature Request",
        "Other",
    ];

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            toast.success(`Your query "${data.queryType}" has been submitted!`);
            reset();
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex justify-center py-10 px-4">
            <div className="w-full max-w-4xl">

                {/* --- Info Cards --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl shadow hover:shadow-md transition-all duration-300">
                        <Mail className="text-primary w-6 h-6" />
                        <div>
                            <p className="text-sm text-gray-500">Email Us At</p>
                            <p className="font-semibold text-secondary">support@roohspace.com</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl shadow hover:shadow-md transition-all duration-300">
                        <Phone className="text-primary w-6 h-6" />
                        <div>
                            <p className="text-sm text-gray-500">Call Us At</p>
                            <p className="font-semibold text-secondary">+92 300 1234567</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl shadow hover:shadow-md transition-all duration-300">
                        <Clock className="text-primary w-6 h-6" />
                        <div>
                            <p className="text-sm text-gray-500">Working Hours</p>
                            <p className="font-semibold text-secondary">Mon - Fri, 9am - 6pm</p>
                        </div>
                    </div>
                </div>

                {/* --- Contact Form --- */}
                <div className="bg-white rounded-xl shadow-md p-8">
                    <h1 className="text-3xl font-bold text-primary text-center mb-4">Contact Us</h1>
                    <p className="text-center text-gray-600 mb-8">
                        Have a question or feedback? Select your query and write us a message!
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
                        {/* Name */}
                        <div>
                            <p className="text-sm text-secondary pb-1">Full Name*</p>
                            <Input
                                type="text"
                                placeholder="John Doe"
                                icon={UserRound}
                                {...register("name", { required: "Full Name is required" })}
                                className="outline-none bg-transparent focus:border-[#537A5A] focus:ring-1 focus:ring-[#537A5A]"
                            />
                            {errors.name && <p className="text-red-500 text-sm -mt-2">{errors.name.message}</p>}
                        </div>

                        {/* Email */}
                        <div>
                            <p className="text-sm text-secondary pb-1">Email*</p>
                            <Input
                                type="email"
                                placeholder="johndoe@example.com"
                                icon={Mail}
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" },
                                })}
                                className="outline-none bg-transparent focus:border-[#537A5A] focus:ring-1 focus:ring-[#537A5A]"
                            />
                            {errors.email && <p className="text-red-500 text-sm -mt-2">{errors.email.message}</p>}
                        </div>

                        {/* Query Dropdown */}
                        <div className="relative">
                            <p className="text-sm text-secondary pb-1">Query Type*</p>
                            <select
                                {...register("queryType", { required: "Please select a query" })}
                                className="w-full p-3 rounded border border-gray-300 bg-white outline-none appearance-none focus:border-[#537A5A] focus:ring-1 focus:ring-[#537A5A] cursor-pointer"
                                disabled={isLoading}
                            >
                                <option value="" disabled>Select your query</option>
                                {queries.map((q, idx) => (
                                    <option key={idx} value={q}>{q}</option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-3 top-9 text-gray-400 pointer-events-none" />
                            {errors.queryType && <p className="text-red-500 text-sm -mt-2">{errors.queryType.message}</p>}
                        </div>

                        {/* Message */}
                        <div className="mt-3">
                            <p className="text-sm text-secondary pb-1">Message*</p>
                            <textarea
                                {...register("message", { required: "Message cannot be empty" })}
                                rows={5}
                                placeholder="Write your message here..."
                                className="w-full p-3 border border-gray-300 rounded bg-transparent outline-none focus:border-[#537A5A] focus:ring-1 focus:ring-[#537A5A] resize-none"
                                disabled={isLoading}
                            />
                            {errors.message && <p className="text-red-500 text-sm -mt-1">{errors.message.message}</p>}
                        </div>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            disabled={isLoading}
                            icon={ArrowRight}
                            isLoading={isLoading}
                            text={"Send Message"}
                            loadingText={"Sending..."}
                            className="mt-2"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
