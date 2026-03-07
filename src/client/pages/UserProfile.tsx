import { MapPin, Eye, PlusCircle, UserRound } from "lucide-react";
import manImage from "../../assets/images/man.avif";
import { useUserAuth } from "../hooks/useUserAuth";
import Button from "../../components/common/Button";
import { useGetUserProfileQuery } from "../features/auth/userApiSlice";

const UserProfile = () => {
    const { handleLogout, isLoading } = useUserAuth();

    const { data: userProfile, isLoading: isProfileLoading } = useGetUserProfileQuery();

    const dummyUser = {
        user: {
            name: "John Doe",
            email: "johndoe@gmail.com",
            profileImage: manImage,
            spaceAdded: 5,
            spacesAccessed: 10,
            recentActivity: 3
        }
    }

    interface Stat {
        title: string;
        value: number | null;
        icon: React.ComponentType<{ size?: number; className?: string }>;
    }

    const stats: Stat[] = [
        {
            title: "Spaces Added",
            value: userProfile?.user?.spacesAdded || dummyUser?.user?.spaceAdded || null,
            icon: PlusCircle,
        },
        {
            title: "Spaces Accessed",
            value: userProfile?.user?.spacesAccessed || dummyUser?.user?.spacesAccessed || null,
            icon: Eye,
        },
        {
            title: "Recent Activity",
            value: userProfile?.user?.recentActivity || dummyUser?.user?.recentActivity || null,
            icon: MapPin,
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-10 px-4">
            <div className="max-w-6xl mx-auto space-y-8">
                {/* Profile Header */}
                <div className="bg-transparent rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-primaryLight to-[#6B9575] h-32"></div>
                    <div className="px-8 pb-8 flex items-center justify-between">
                        <div className="flex flex-col md:flex-row md:items-end gap-6 -mt-16">
                            <div className="relative">
                                <img
                                    loading="lazy"
                                    src={userProfile?.user?.profileImage || manImage}
                                    alt="Profile"
                                    className="w-32 h-32 rounded-2xl border-4 border-white shadow-sm object-cover"
                                />
                                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-primaryLight rounded-full flex items-center justify-center shadow-lg">
                                    <UserRound size={20} className="text-white" />
                                </div>
                            </div>
                            <div className="flex-1 md:-mb-1">
                                {isProfileLoading ? (
                                    <div className="space-y-2">
                                        <div className="h-9 w-56 rounded-md bg-gray-200 animate-pulse" />
                                        <div className="h-5 w-64 rounded-md bg-gray-200 animate-pulse" />
                                    </div>
                                ) : (
                                    <>
                                        <h1 className="text-3xl font-bold text-secondary mb-0">
                                            {userProfile?.user?.name || dummyUser?.user?.name}
                                        </h1>
                                        <p className="text-gray-600 flex items-center gap-2">
                                            {userProfile?.user?.email || dummyUser?.user?.email}
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>
                        <div>
                            <Button onClick={() => handleLogout()} disabled={isLoading} isLoading={isLoading} text={"Logout"} loadingText={"Loging Out..."} className="px-4"></Button>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={index}
                                className="bg-transparent rounded-xl shadow-sm border border-green-800 p-6 transition-all duration-300"
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2 orb">
                                            {stat.title}
                                        </p>
                                        {isProfileLoading ? (
                                            <div className="h-10 w-16 rounded-md bg-gray-200 animate-pulse" />
                                        ) : (
                                            <p className="text-4xl font-bold text-secondary orb">{stat.value ?? 0}</p>
                                        )}
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="bg-green-100 rounded-xl shadow-sm border border-green-300 p-8 hover:border-primaryLight/20 transition-all duration-300">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-green-300 rounded-xl">
                                <PlusCircle size={24} className="text-green-700" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-lg font-semibold orb text-gray-900 mb-2">
                                    Recently Added Spaces
                                </h2>
                                <p className="text-gray-600 leading-normal">
                                    Browse and manage the spaces you've recently created and contributed to the platform.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-100 rounded-xl shadow-sm border border-blue-300 p-8 hover:border-primaryLight/20 transition-all duration-200">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-blue-300 rounded-xl">
                                <Eye size={24} className="text-blue-700" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-lg font-semibold orb text-gray-900 mb-2">
                                    Spaces Visited
                                </h2>
                                <p className="text-gray-600 leading-normal">
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
