export default function MosqueLoader() {
    return (
        <div className="h-[calc(100vh-80px)] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="relative">
                {/* Pulsing background circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-green-500/10 rounded-full animate-ping"></div>
                </div>

                {/* Mosque Icon */}
                <div className="relative z-10 mb-4">
                    <svg
                        width="140"
                        height="140"
                        viewBox="0 0 120 120"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-4"
                    >
                        {/* Main dome */}
                        <path
                            d="M60 25C60 25 45 35 45 45C45 52 51 58 60 58C69 58 75 52 75 45C75 35 60 25 60 25Z"
                            fill="#10B981"
                            className="opacity-90"
                        />

                        {/* Left minaret */}
                        <rect x="30" y="45" width="8" height="45" fill="#6B7280" rx="1" />
                        <circle cx="34" cy="42" r="5" fill="#10B981" />
                        <path d="M34 35L32 40L36 40Z" fill="#10B981" />

                        {/* Right minaret */}
                        <rect x="82" y="45" width="8" height="45" fill="#6B7280" rx="1" />
                        <circle cx="86" cy="42" r="5" fill="#10B981" />
                        <path d="M86 35L84 40L88 40Z" fill="#10B981" />

                        {/* Main building */}
                        <rect x="45" y="58" width="30" height="32" fill="#6B7280" rx="2" />

                        {/* Central arch/door */}
                        <path
                            d="M52 90V75C52 71 55 68 60 68C65 68 68 71 68 75V90"
                            fill="#10B981"
                            className="opacity-80"
                        />

                        {/* Crescent on top of dome */}
                        <path
                            d="M60 20C58 20 57 21 57 23C57 24 58 25 59 25C58 25 57 26 57 27C57 29 58 30 60 30C60 28 60 20 60 20Z"
                            fill="#10B981"
                        />
                    </svg>
                </div>

                {/* Loading spinner */}
                <div className="flex items-center justify-center">
                    <div className="relative w-16 h-16">
                        <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
                        <div className="absolute inset-0 border-4 border-green-500 rounded-full border-t-transparent animate-spin"></div>
                    </div>
                </div>

                {/* Loading text */}
                <div className="mt-6 text-center">
                    <p className="text-gray-700 font-semibold text-lg">Locating...</p>
                    <p className="text-gray-500 text-sm mt-1">Finding nearby mosques</p>
                </div>
            </div>
        </div>
    );
}