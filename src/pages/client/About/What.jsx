import { Globe, Heart, MapPin, UsersRound, Zap } from "lucide-react"

const What = () => {
    return (
        <div className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#537A5A] via-[#6B9575] to-[#4A6B51]"></div>
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="text-white">
                        <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-md rounded-full mb-6 border border-white/30">
                            <span className="text-white font-semibold text-sm tracking-wider">INTRODUCING ROOHSPACE</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            What is<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-200 to-white">
                                RoohSpace?
                            </span>
                        </h2>
                        <p className="text-base text-white/95 mb-8 leading-relaxed">
                            RoohSpace is more than just an app—it's your spiritual companion in the modern world. The name "Rooh" means soul or spirit, representing our mission to help you nurture your spiritual connection wherever you are.
                        </p>
                        <div className="space-y-6 mb-8">
                            <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-white/20">
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Heart size={24} className="text-white" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-lg mb-2">Spiritual Sanctuary Finder</h4>
                                    <p className="text-white/90 leading-relaxed">
                                        Discover peaceful prayer spaces in bustling cities, shopping centers, airports, and offices—wherever your journey takes you.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-white/20">
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Zap size={24} className="text-white" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-lg mb-2">Smart & Intuitive</h4>
                                    <p className="text-white/90 leading-relaxed">
                                        Powered by intelligent algorithms that understand your needs and guide you to the most suitable prayer spaces based on real-time data.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-white/20">
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Globe size={24} className="text-white" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-lg mb-2">Community-Driven Platform</h4>
                                    <p className="text-white/90 leading-relaxed">
                                        Built by a community that values spirituality, privacy, and convenience—creating a network of verified, accessible prayer spaces worldwide.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative bg-white/15 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-2xl">
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full blur-2xl opacity-50"></div>
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-green-300 to-green-500 rounded-full blur-2xl opacity-50"></div>

                            <div className="relative space-y-6">
                                <div className="bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/40">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-14 h-14 bg-gradient-to-br from-[#537A5A] to-[#6B9575] rounded-xl flex items-center justify-center shadow-lg">
                                            <MapPin size={28} className="text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-gray-900 text-lg">Nearby Mosque</h4>
                                            <p className="text-gray-600 text-sm">0.3 km away</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-200/50">
                                        <div className="flex items-center gap-2">
                                            <UsersRound size={18} className="text-green-600" />
                                            <span className="text-sm font-semibold text-green-600">Less Crowded</span>
                                        </div>
                                        <div className="px-3 py-1 bg-green-100/80 backdrop-blur-sm rounded-full border border-green-200/50">
                                            <span className="text-xs font-semibold text-green-700">Open Now</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/40">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                                            <MapPin size={28} className="text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-gray-900 text-lg">Mall Prayer Room</h4>
                                            <p className="text-gray-600 text-sm">1.2 km away</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-200/50">
                                        <div className="flex items-center gap-2">
                                            <UsersRound size={18} className="text-orange-600" />
                                            <span className="text-sm font-semibold text-orange-600">Moderate</span>
                                        </div>
                                        <div className="px-3 py-1 bg-blue-100/80 backdrop-blur-sm rounded-full border border-blue-200/50">
                                            <span className="text-xs font-semibold text-blue-700">Open 24/7</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-[#537A5A] to-[#6B9575] rounded-2xl p-6 text-white shadow-2xl border border-white/20">
                                    <div className="flex items-center justify-between mb-3">
                                        <h4 className="font-bold text-lg">Your Journey Starts Here</h4>
                                        <Heart size={24} className="text-white/90" />
                                    </div>
                                    <p className="text-white/95 text-sm leading-relaxed">
                                        Download RoohSpace today and never miss a prayer time, no matter where life takes you.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default What