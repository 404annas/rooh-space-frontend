import { MapPin, Eye, PlusCircle, UserRound } from "lucide-react";
import manImage from "../../assets/images/man.avif"

const UserProfile = () => {
    const user = {
        name: "John Doe",
        email: "johndoe@example.com",
        profileImage: manImage,
        spacesAdded: 12,
        spacesAccessed: 34,
        recentActivity: 5,
    };

    const stats = [
        {
            title: "Spaces Added",
            value: user.spacesAdded,
            icon: PlusCircle,
        },
        {
            title: "Spaces Accessed",
            value: user.spacesAccessed,
            icon: Eye,
        },
        {
            title: "Recent Activity",
            value: user.recentActivity,
            icon: MapPin,
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-10 px-4">
            <div className="max-w-6xl mx-auto space-y-8">
                {/* Profile Header */}
                <div className="bg-transparent rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-primaryLight to-[#6B9575] h-32"></div>
                    <div className="px-8 pb-8">
                        <div className="flex flex-col md:flex-row md:items-end gap-6 -mt-16">
                            <div className="relative">
                                <img
                                loading="lazy"
                                    src={user.profileImage}
                                    alt="Profile"
                                    className="w-32 h-32 rounded-2xl border-4 border-white shadow-lg object-cover"
                                />
                                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-primaryLight rounded-full flex items-center justify-center shadow-lg">
                                    <UserRound size={20} className="text-white" />
                                </div>
                            </div>
                            <div className="flex-1 md:-mb-1">
                                <h1 className="text-3xl font-bold text-secondary mb-0">{user.name}</h1>
                                <p className="text-gray-600 flex items-center gap-2">
                                    {user.email}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={index}
                                className="bg-transparent rounded-xl shadow-md border border-gray-100 p-6 hover:border-primaryLight/20 transition-all duration-300"
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                                            {stat.title}
                                        </p>
                                        <p className="text-4xl font-bold text-secondary">{stat.value}</p>
                                    </div>
                                    <div className="p-3 bg-primary rounded-xl">
                                        <Icon size={24} className="text-white" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Activity Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl shadow-sm border border-primaryLight/10 p-8 hover:border-primaryLight/20 transition-all duration-300">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-blue-50 rounded-xl">
                                <PlusCircle size={24} className="text-blue-600" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                                    Recently Added Spaces
                                </h2>
                                <p className="text-gray-600 leading-relaxed">
                                    Browse and manage the spaces you've recently created and contributed to the platform.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-primaryLight/10 p-8 hover:border-primaryLight/20 transition-all duration-200">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-purple-50 rounded-xl">
                                <Eye size={24} className="text-purple-600" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                                    Spaces Visited
                                </h2>
                                <p className="text-gray-600 leading-relaxed">
                                    View your history of accessed spaces and revisit your favorite locations quickly.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;