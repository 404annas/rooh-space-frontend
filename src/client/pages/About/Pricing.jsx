import { CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const Pricing = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-20">
            <div className="text-center mb-16">
                <div className="inline-block px-6 py-2 bg-[#537A5A]/10 rounded-full mb-4">
                    <span className="text-[#537A5A] font-semibold text-sm">FLEXIBLE PRICING</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Choose Your Perfect Plan
                </h2>
                <p className="text-base text-gray-600 max-w-2xl mx-auto">
                    Start free and upgrade anytime for advanced features
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Free Plan */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-gray-200 hover:shadow-lg transition-all duration-500">
                    <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Free</h3>
                        <div className="flex items-end justify-center gap-1 mb-2">
                            <span className="text-5xl font-bold text-gray-900">$0</span>
                            <span className="text-gray-500 mb-2">/month</span>
                        </div>
                        <p className="text-gray-600">Perfect for occasional users</p>
                    </div>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-start gap-3">
                            <CheckCircle2 size={20} className="text-[#537A5A] flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">Interactive map view</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 size={20} className="text-[#537A5A] flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">Nearby prayer rooms & mosques</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 size={20} className="text-[#537A5A] flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">Basic crowd information</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 size={20} className="text-[#537A5A] flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">Verified locations</span>
                        </li>
                    </ul>
                    <Link to={"/register"} onClick={() => scrollTo(0, 0)}>
                        <button className="w-full bg-gray-100 text-gray-900 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300">
                            Get Started
                        </button>
                    </Link>
                </div>

                {/* Premium Plan */}
                <div className="bg-gradient-to-br from-[#537A5A] to-[#6B9575] rounded-2xl p-8 shadow-xl border-2 border-[#537A5A] relative transform md:scale-105">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                        MOST POPULAR
                    </div>
                    <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-white mb-2">Premium</h3>
                        <div className="flex items-end justify-center gap-1 mb-2">
                            <span className="text-5xl font-bold text-white">$4.99</span>
                            <span className="text-white/80 mb-2">/month</span>
                        </div>
                        <p className="text-white/90">For dedicated users</p>
                    </div>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-start gap-3">
                            <CheckCircle2 size={20} className="text-white flex-shrink-0 mt-0.5" />
                            <span className="text-white">Everything in Free, plus:</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 size={20} className="text-white flex-shrink-0 mt-0.5" />
                            <span className="text-white">Real-time crowd updates</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 size={20} className="text-white flex-shrink-0 mt-0.5" />
                            <span className="text-white">Save favorite locations</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 size={20} className="text-white flex-shrink-0 mt-0.5" />
                            <span className="text-white">Busiest hours analytics</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 size={20} className="text-white flex-shrink-0 mt-0.5" />
                            <span className="text-white">Smart notifications</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 size={20} className="text-white flex-shrink-0 mt-0.5" />
                            <span className="text-white">Ad-free experience</span>
                        </li>
                    </ul>
                    <button className="w-full bg-white text-[#537A5A] py-3 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
                        Upgrade Now
                    </button>
                </div>

                {/* Pro Plan */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-gray-200 hover:shadow-lg transition-all duration-500">
                    <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
                        <div className="flex items-end justify-center gap-1 mb-2">
                            <span className="text-5xl font-bold text-gray-900">$9.99</span>
                            <span className="text-gray-500 mb-2">/month</span>
                        </div>
                        <p className="text-gray-600">For power users</p>
                    </div>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-start gap-3">
                            <CheckCircle2 size={20} className="text-[#537A5A] flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">Everything in Premium, plus:</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 size={20} className="text-[#537A5A] flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">Offline maps & directions</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 size={20} className="text-[#537A5A] flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">Advanced analytics dashboard</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 size={20} className="text-[#537A5A] flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">Priority support</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 size={20} className="text-[#537A5A] flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">Custom notifications</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 size={20} className="text-[#537A5A] flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">Export prayer history</span>
                        </li>
                    </ul>
                    <button className="w-full bg-gradient-to-r from-[#537A5A] to-[#6B9575] text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                        Go Pro
                    </button>
                </div>
            </div>

            <div className="text-center mt-12">
                <p className="text-gray-600 mb-4">Save 20% with annual billing</p>
                <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
                    <span className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-[#537A5A]" />
                        Cancel anytime
                    </span>
                    <span className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-[#537A5A]" />
                        7-day money back guarantee
                    </span>
                    <span className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-[#537A5A]" />
                        No credit card required for free plan
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Pricing