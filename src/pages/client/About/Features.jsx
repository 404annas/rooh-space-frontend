import { Clock, MapPin, ShieldCheck, UsersRound } from "lucide-react";

const Features = () => {
    const features = [
        {
            icon: MapPin,
            title: "Smart Location Finder",
            description: "Discover nearby prayer rooms and mosques instantly with our intelligent map interface.",
            gradient: "from-blue-100 to-blue-700"
        },
        {
            icon: UsersRound,
            title: "Real-Time Crowd Levels",
            description: "See crowd density at each location - less, moderate, or high - helping you find peaceful spaces.",
            gradient: "from-purple-100 to-purple-700"
        },
        {
            icon: Clock,
            title: "Hassle-Free Experience",
            description: "No check-ins or check-outs required. Get all the information you need instantly.",
            gradient: "from-green-100 to-green-700"
        },
        {
            icon: ShieldCheck,
            title: "Verified Locations",
            description: "Every prayer space is verified by our admin team to ensure accuracy and reliability.",
            gradient: "from-orange-100 to-orange-700"
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-20">
            <div className="text-center mb-16">
                <div className="inline-block px-6 py-2 bg-[#537A5A]/10 rounded-full mb-4">
                    <span className="text-[#537A5A] font-semibold text-sm">POWERFUL FEATURES</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Everything You Need in One App
                </h2>
                <p className="text-base text-gray-600 max-w-2xl mx-auto">
                    Designed with simplicity and efficiency in mind to enhance your spiritual experience
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, idx) => {
                    const Icon = feature.icon;
                    return (
                        <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-full flex items-center justify-center mb-6`}>
                                <Icon size={30} className="text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Features