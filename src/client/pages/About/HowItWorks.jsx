import { Clock, MapPin, Search, UsersRound } from "lucide-react";

const HowItWorks = () => {
    const howItWorks = [
        {
            step: "1",
            title: "Open the App",
            description: "Launch the app and allow location access to see nearby prayer spaces.",
            icon: Search
        },
        {
            step: "2",
            title: "View Crowd Levels",
            description: "Check real-time crowd density for each location on the interactive map.",
            icon: UsersRound
        },
        {
            step: "3",
            title: "Check Prayer Time",
            description: "Check accurate and verified prayer time for desired space.",
            icon: Clock
        },
        {
            step: "4",
            title: "Choose Your Space",
            description: "Select a peaceful location and get accurate directions instantly.",
            icon: MapPin
        }
    ];

    return (
        <div className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="inline-block px-6 py-2 bg-[#537A5A]/10 rounded-full mb-4">
                        <span className="text-[#537A5A] font-semibold text-sm">SIMPLE PROCESS</span>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        How It Works?
                    </h2>
                    <p className="text-base text-gray-600 max-w-2xl mx-auto">
                        Three simple steps to find your perfect prayer space
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-4">
                    {howItWorks.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div key={idx} className="relative">
                                <div className="bg-transparent rounded-2xl p-8 shadow-sm border border-gray-200 h-full">
                                    <div className="w-16 h-16 bg-[#537A5A] rounded-2xl flex items-center justify-center mb-6 text-white text-2xl font-bold">
                                        {item.step}
                                    </div>
                                    <div className="w-12 h-12 bg-[#537A5A]/10 rounded-xl flex items-center justify-center mb-4">
                                        <Icon size={24} className="text-[#537A5A]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                </div>
                                {idx < howItWorks.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#537A5A]/20"></div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default HowItWorks