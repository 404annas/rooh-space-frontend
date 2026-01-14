import Hero from "./About/Hero";
import Stats from "./About/Stats";
import Problem from "./About/Problem";
import Solution from "./About/Solution";
import Features from "./About/Features";
import HowItWorks from "./About/HowItWorks";
import Pricing from "./About/Pricing";
import AdminDesc from "./About/AdminDesc";
import CTA from "./About/CTA";
import What from "./About/What";

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