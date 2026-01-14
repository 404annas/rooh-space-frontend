import React, { useState } from "react";
import { CheckCircle2, X, Zap, Crown, Star, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
    const [billingCycle, setBillingCycle] = useState("monthly");

    const plans = [
        {
            name: "Free",
            icon: Heart,
            price: { monthly: 0, yearly: 0 },
            description: "Perfect for occasional users",
            features: [
                "Interactive map view",
                "Nearby prayer rooms & mosques",
                "Basic crowd information",
                "Verified locations",
                "Community reviews"
            ],
            limitations: [
                "Limited to 10 searches per day",
                "Basic notifications only",
                "Ads supported"
            ],
            buttonText: "Get Started",
            buttonStyle: "bg-gray-100 text-gray-900 hover:bg-gray-200",
            popular: false,
            gradient: "from-gray-500 to-gray-800"
        },
        {
            name: "Premium",
            icon: Zap,
            price: { monthly: 4.99, yearly: 49.99 },
            description: "For dedicated users",
            features: [
                "Everything in Free, plus:",
                "Real-time crowd updates",
                "Save unlimited favorite locations",
                "Busiest hours analytics",
                "Smart notifications",
                "Prayer time reminders",
                "Ad-free experience",
                "Priority customer support"
            ],
            limitations: [],
            buttonText: "Upgrade to Premium",
            buttonStyle: "bg-gradient-to-r from-[#537A5A] to-[#6B9575] text-white hover:shadow-lg hover:scale-105",
            popular: true,
            gradient: "from-[#537A5A] to-[#6B9575]"
        },
        {
            name: "Pro",
            icon: Crown,
            price: { monthly: 9.99, yearly: 99.99 },
            description: "For power users",
            features: [
                "Everything in Premium, plus:",
                "Offline maps & directions",
                "Advanced analytics dashboard",
                "Custom prayer time alerts",
                "Export prayer history & stats",
                "Early access to new features",
                "VIP support (24/7)",
                "Contribute to community features"
            ],
            limitations: [],
            buttonText: "Go Pro",
            buttonStyle: "bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-lg hover:scale-105",
            popular: false,
            gradient: "from-purple-600 to-indigo-600"
        }
    ];

    const features = [
        {
            category: "Core Features",
            items: [
                { name: "Interactive Map", free: true, premium: true, pro: true },
                { name: "Nearby Locations", free: true, premium: true, pro: true },
                { name: "Basic Crowd Info", free: true, premium: true, pro: true },
                { name: "Real-time Updates", free: false, premium: true, pro: true },
                { name: "Save Favorites", free: "Limited", premium: "Unlimited", pro: "Unlimited" },
                { name: "Offline Access", free: false, premium: false, pro: true }
            ]
        },
        {
            category: "Analytics & Insights",
            items: [
                { name: "Busiest Hours", free: false, premium: true, pro: true },
                { name: "Advanced Dashboard", free: false, premium: false, pro: true },
                { name: "Prayer History", free: false, premium: true, pro: true },
                { name: "Export Data", free: false, premium: false, pro: true }
            ]
        },
        {
            category: "Support & Experience",
            items: [
                { name: "Ad-Free", free: false, premium: true, pro: true },
                { name: "Customer Support", free: "Email", premium: "Priority", pro: "24/7 VIP" },
                { name: "Early Access", free: false, premium: false, pro: true }
            ]
        }
    ];

    const faqs = [
        {
            question: "Can I switch plans anytime?",
            answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately."
        },
        {
            question: "What happens if I cancel?",
            answer: "You'll continue to have access to premium features until the end of your billing period, then you'll be moved to the free plan."
        },
        {
            question: "Do you offer refunds?",
            answer: "We offer a 7-day money-back guarantee for all paid plans. No questions asked."
        },
        {
            question: "Is my payment information secure?",
            answer: "Absolutely! We use industry-standard encryption and never store your payment details on our servers."
        }
    ];

    const calculateSavings = (plan) => {
        const monthlyCost = plan.price.monthly * 12;
        const yearlyCost = plan.price.yearly;
        const savings = monthlyCost - yearlyCost;
        const percentage = Math.round((savings / monthlyCost) * 100);
        return { savings, percentage };
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-[#537A5A] via-[#6B9575] to-[#537A5A] text-white overflow-hidden py-16 pb-32">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 text-center">
                    <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                        <span className="text-white font-semibold text-sm">FLEXIBLE PRICING</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Choose Your Perfect Plan
                    </h1>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10">
                        Start free and upgrade anytime to unlock powerful features that enhance your spiritual journey
                    </p>

                    {/* Billing Toggle */}
                    <div className="inline-flex items-center bg-white/20 backdrop-blur-sm p-2 rounded-full border border-white/30">
                        <button
                            onClick={() => setBillingCycle("monthly")}
                            className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${billingCycle === "monthly"
                                ? "bg-white text-[#537A5A] shadow-lg"
                                : "text-white hover:bg-white/10"
                                }`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBillingCycle("yearly")}
                            className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 flex items-center gap-2 ${billingCycle === "yearly"
                                ? "bg-white text-[#537A5A] shadow-lg"
                                : "text-white hover:bg-white/10"
                                }`}
                        >
                            Yearly
                            <span className="px-2 py-0.5 bg-yellow-400 text-gray-900 text-xs rounded-full font-bold">
                                Save 20%
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Pricing Cards */}
            <div className="max-w-7xl mx-auto px-4 -mt-16 pb-20">
                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, idx) => {
                        const Icon = plan.icon;
                        const savings = calculateSavings(plan);
                        const displayPrice = billingCycle === "monthly" ? plan.price.monthly : plan.price.yearly;

                        return (
                            <div
                                key={idx}
                                className={`relative bg-white rounded-3xl shadow-md border-2 transition-all duration-300 ${plan.popular
                                    ? "border-[#537A5A] md:scale-105"
                                    : "border-gray-200 hover:border-gray-300 hover:shadow-lg"
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                                        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-6 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2">
                                            <Star size={16} fill="currentColor" />
                                            MOST POPULAR
                                        </div>
                                    </div>
                                )}

                                <div className="p-8">
                                    <div className={`w-16 h-16 bg-gradient-to-br ${plan.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-md`}>
                                        <Icon size={32} className="text-white" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                    <p className="text-gray-600 mb-6">{plan.description}</p>

                                    <div className="mb-6">
                                        <div className="flex items-end gap-2 mb-2">
                                            <span className="text-5xl font-bold text-gray-900">${displayPrice}</span>
                                            <span className="text-gray-500 mb-2">/{billingCycle === "monthly" ? "month" : "year"}</span>
                                        </div>
                                        {billingCycle === "yearly" && plan.price.yearly > 0 && (
                                            <div className="text-sm text-green-600 font-semibold">
                                                Save ${savings.savings.toFixed(2)} per year ({savings.percentage}% off)
                                            </div>
                                        )}
                                    </div>

                                    <button className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 mb-8 ${plan.buttonStyle}`}>
                                        {plan.buttonText}
                                    </button>

                                    <div className="space-y-4 mb-6">
                                        {plan.features.map((feature, fIdx) => (
                                            <div key={fIdx} className="flex items-start gap-3">
                                                <CheckCircle2 size={20} className="text-[#537A5A] flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-700 text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {plan.limitations.length > 0 && (
                                        <div className="pt-6 border-t border-gray-200">
                                            <p className="text-sm text-gray-500 font-semibold mb-3">Limitations:</p>
                                            <div className="space-y-2">
                                                {plan.limitations.map((limitation, lIdx) => (
                                                    <div key={lIdx} className="flex items-center gap-2">
                                                        <X size={16} className="text-gray-400 flex-shrink-0" />
                                                        <span className="text-xs text-gray-500">{limitation}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Trust Badges */}
            <div className="bg-white py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={20} className="text-[#537A5A]" />
                            <span>Cancel anytime</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={20} className="text-[#537A5A]" />
                            <span>7-day money back guarantee</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={20} className="text-[#537A5A]" />
                            <span>No credit card required</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={20} className="text-[#537A5A]" />
                            <span>Secure payments</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Feature Comparison Table */}
            <div className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Compare Plans</h2>
                        <p className="text-base text-gray-600">See exactly what's included in each plan</p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-200">
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Features</th>
                                        <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Free</th>
                                        <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Premium</th>
                                        <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Pro</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {features.map((category, catIdx) => (
                                        <React.Fragment key={catIdx}>
                                            <tr className="bg-gray-50">
                                                <td colSpan={4} className="px-6 py-3 text-sm font-bold text-gray-900">
                                                    {category.category}
                                                </td>
                                            </tr>
                                            {category.items.map((item, itemIdx) => (
                                                <tr key={itemIdx} className="border-b border-gray-100">
                                                    <td className="px-6 py-4 text-sm text-gray-700">{item.name}</td>
                                                    <td className="px-6 py-4 text-center">
                                                        {typeof item.free === "boolean" ? (
                                                            item.free ? (
                                                                <CheckCircle2 size={20} className="text-green-600 mx-auto" />
                                                            ) : (
                                                                <X size={20} className="text-gray-300 mx-auto" />
                                                            )
                                                        ) : (
                                                            <span className="text-sm text-gray-600">{item.free}</span>
                                                        )}
                                                    </td>
                                                    <td className="px-6 py-4 text-center">
                                                        {typeof item.premium === "boolean" ? (
                                                            item.premium ? (
                                                                <CheckCircle2 size={20} className="text-green-600 mx-auto" />
                                                            ) : (
                                                                <X size={20} className="text-gray-300 mx-auto" />
                                                            )
                                                        ) : (
                                                            <span className="text-sm text-gray-600">{item.premium}</span>
                                                        )}
                                                    </td>
                                                    <td className="px-6 py-4 text-center">
                                                        {typeof item.pro === "boolean" ? (
                                                            item.pro ? (
                                                                <CheckCircle2 size={20} className="text-green-600 mx-auto" />
                                                            ) : (
                                                                <X size={20} className="text-gray-300 mx-auto" />
                                                            )
                                                        ) : (
                                                            <span className="text-sm text-gray-600">{item.pro}</span>
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                        </React.Fragment>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white py-20">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-base text-gray-600">Everything you need to know about our pricing</p>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-[#537A5A] to-[#6B9575] py-20">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to Start Your Journey?
                    </h2>
                    <p className="text-base text-white/90 mb-8">
                        Join thousands of users finding peace with RoohSpace
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to={"/register"} onClick={() => scrollTo(0, 0)}>
                            <button className="bg-white text-[#537A5A] px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                                <Zap size={20} />
                                Start Free Trial
                            </button>
                        </Link>
                        <Link to={"/contact"} onClick={() => scrollTo(0, 0)}>
                            <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-3.5 rounded-xl font-semibold border-2 border-white/30 hover:bg-white/20 transition-all duration-200">
                                Contact Sales
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;