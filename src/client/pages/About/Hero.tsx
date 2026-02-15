import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <div className="relative bg-gradient-to-br from-[#537A5A] via-[#6B9575] to-[#537A5A] text-white overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 py-20">
                <div className="text-center max-w-4xl mx-auto">
                    <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                        <span className="text-white font-semibold text-sm">ABOUT OUR MISSION</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        Finding Peace in a Busy World
                    </h1>
                    <p className="text-xl text-white/90 mb-8 leading-relaxed">
                        We're revolutionizing how people find prayer spaces by providing real-time crowd information and verified locations, making spiritual practice easier and more accessible for everyone.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to={"/register"} onClick={() => scrollTo(0,0)}>
                            <button className="bg-white text-[#537A5A] px-8 py-3 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
                                SignUp Now
                            </button>
                        </Link>
                        <Link to={"/"} onClick={() => scrollTo(0,0)}>
                            <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-2.5 rounded-xl font-semibold border-2 border-white/30 hover:bg-white/20 transition-all duration-200">
                                Find Spaces
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero