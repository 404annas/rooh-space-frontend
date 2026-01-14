const Stats = () => {
    const stats = [
        { number: "500+", label: "Prayer Spaces" },
        { number: "10K+", label: "Active Users" },
        { number: "10+", label: "Cities Covered" },
        { number: "4.8★", label: "User Rating" }
    ];

    return (
        <div className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-[#537A5A] mb-2">{stat.number}</div>
                            <div className="text-gray-600 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>)
}

export default Stats