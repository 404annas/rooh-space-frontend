import { UsersRound } from 'lucide-react'
import crowdImage from "../../../assets/images/crowd.avif"

const Problem = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <div className="inline-block px-6 py-2 bg-red-50 rounded-full mb-4">
                        <span className="text-red-600 font-semibold text-sm">THE CHALLENGE</span>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        The Struggle to Find Peaceful Prayer Spaces
                    </h2>
                    <p className="text-base text-gray-600 mb-6 leading-relaxed">
                        In today's fast-paced urban environment, finding a quiet, available prayer space can be challenging. Whether you're in a mall, office, or public area, uncertainty about crowd levels and location availability can disrupt your spiritual routine.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-1">Unknown Crowd Levels</h4>
                                <p className="text-gray-600">No way to know if a prayer space is packed or peaceful</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-1">Hidden Locations</h4>
                                <p className="text-gray-600">Prayer rooms in malls and offices are often hard to find</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-1">Time Wasted</h4>
                                <p className="text-gray-600">Searching for available spaces during prayer times</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-1">Unknown Prayer Times</h4>
                                <p className="text-gray-600">Unknown prayer times at nearby mosques, causing inconvenience.</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="relative">
                    <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden flex items-center justify-center">
                        <img
                            loading='lazy'
                            src={crowdImage}
                            alt="Crowd"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                                <UsersRound size={24} className="text-red-600" />
                            </div>
                            <div>
                                <div className="text-sm text-gray-500">Crowd Level</div>
                                <div className="font-bold text-red-600">High</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default Problem