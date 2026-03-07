import Hero from "../components/About/Hero";
import Stats from "../components/About/Stats";
import Problem from "../components/About/Problem";
import Solution from "../components/About/Solution";
import Features from "../components/About/Features";
import HowItWorks from "../components/About/HowItWorks";
import Pricing from "../components/About/Pricing";
import AdminDesc from "../components/About/AdminDesc";
import CTA from "../components/About/CTA";
import What from "../components/About/What";

const About = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <Hero />

            {/* Stats Section */}
            <Stats />

            {/* What Is RoohSpace */}
            <What />

            {/* Problem & Solution Section */}
            <Problem />

            {/* Our Solution Section */}
            <Solution />

            {/* Features Section */}
            <Features />

            {/* How It Works Section */}
            <HowItWorks />

            {/* Pricing Section */}
            <Pricing />

            {/* Admin Section */}
            <AdminDesc />

            {/* CTA Section */}
            <CTA />
        </div>
    );
};

export default About;