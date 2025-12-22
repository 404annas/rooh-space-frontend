import { Globe, Shield, TrendingUp } from 'lucide-react'
import adminImage from "../../../assets/images/admin.avif"

const AdminDesc = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-20">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-12 border border-indigo-100">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-block px-6 py-2 bg-indigo-100 rounded-full mb-4">
                            <span className="text-indigo-700 font-semibold text-sm">FOR ADMINISTRATORS</span>
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Powerful Admin Dashboard
                        </h2>
                        <p className="text-base text-gray-600 mb-8 leading-relaxed">
                            Our admin panel provides complete control over prayer space management, approvals, and analytics to ensure the platform stays accurate and helpful.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Shield size={20} className="text-indigo-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Approve & Manage Locations</h4>
                                    <p className="text-gray-600">Verify and approve new prayer spaces submitted by users</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <TrendingUp size={20} className="text-indigo-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Analytics Dashboard</h4>
                                    <p className="text-gray-600">Track usage patterns and popular prayer spaces</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Globe size={20} className="text-indigo-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Data Management</h4>
                                    <p className="text-gray-600">Update crowd levels and location information in real-time</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square bg-gradient-to-br from-indigo-200 to-purple-200 rounded-3xl flex items-end justify-center overflow-hidden">
                            <img
                                loading='lazy'
                                src={adminImage}
                                alt="Admin Dashboard"
                                className="w-full h-full object-cover object-bottom"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDesc