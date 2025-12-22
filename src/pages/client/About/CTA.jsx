import { Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

const CTA = () => {
    return (
        <div className="bg-gradient-to-r from-[#537A5A] to-[#6B9575] py-20">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold text-white mb-6">
                    Ready to Transform Your Prayer Experience?
                </h2>
                <p className="text-base text-white/90 mb-8">
                    Join thousands of users who have found peace and convenience with our app
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Link to={"/register"} onClick={() => scrollTo(0,0)}>
                        <button className="bg-white text-[#537A5A] px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                            <Zap size={20} />
                            Get Started Free
                        </button>
                    </Link>
                    <Link to={"/contact"} onClick={() => scrollTo(0,0)}>
                        <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-3.5 rounded-xl font-semibold border-2 border-white/30 hover:bg-white/20 transition-all duration-200">
                            Contact Us
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CTA