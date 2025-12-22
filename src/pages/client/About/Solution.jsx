import { CheckCircle2, UsersRound } from 'lucide-react'
import mosqueImage from "../../../assets/images/mosque.avif"

const Solution = () => {
    const benefits = [
        "Find calm prayer spaces in busy areas",
        "Save time with real-time crowd information",
        "Plan your spiritual routine better",
        "Discover new prayer locations nearby",
        "Make informed decisions instantly",
        "Access verified and accurate data",
        "Providing accurate prayer times",
        "Premium plans for better results"
    ];

    return (
        <div className="bg-gradient-to-br from-[#537A5A] to-[#6B9575] text-white py-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative order-2 lg:order-1">
                        <div className="aspect-square bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-white/20 overflow-hidden">
                            <img
                                loading='lazy'
                                src={mosqueImage}
                                alt="Mosque Crowd"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -top-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                                    <UsersRound size={24} className="text-green-600" />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500">Crowd Level</div>
                                    <div className="font-bold text-green-600">Less</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                            <span className="text-white font-semibold text-sm">OUR SOLUTION</span>
                        </div>
                        <h2 className="text-4xl font-bold mb-6">
                            Your Guide to Peaceful Prayer
                        </h2>
                        <p className="text-base text-white/90 mb-8 leading-relaxed">
                            We've built a smart platform that shows you exactly where to go, how crowded it is, and gives you peace of mind - all without any complicated check-ins or manual updates.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            {benefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                    <CheckCircle2 size={20} className="text-white flex-shrink-0" />
                                    <span className="text-white/90">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Solution