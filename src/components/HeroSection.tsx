import { Shield } from 'lucide-react';
import SplineBackground from './SplineBackground';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Spline 3D Background */}
      <SplineBackground />
      
      {/* Existing Animated Background Elements - kept for additional depth */}
      <div className="absolute inset-0 overflow-hidden z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-linksuraksha-purple/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-linksuraksha-glow/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-20">
        {/* Hero Badge */}
        <div className="glassmorphism inline-flex items-center space-x-2 px-6 py-3 rounded-full mb-8 fade-in-up">
          <Shield className="w-5 h-5 text-linksuraksha-glow" />
          <span className="text-sm font-medium text-gray-300">Next-Gen Financial Security</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 fade-in-up staggered-animation" style={{ '--stagger': 1 } as any}>
          <span className="block text-white">Private, Controlled</span>
          <span className="block bg-gradient-to-r from-linksuraksha-glow via-linksuraksha-purple-light to-linksuraksha-purple bg-clip-text text-transparent glow-text">
            Transactions
          </span>
          <span className="block text-white text-4xl md:text-5xl lg:text-6xl mt-4">
            Without Exposing Your Bank Info
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed fade-in-up staggered-animation" style={{ '--stagger': 2 } as any}>
          Experience the future of digital payments with LinkSuraksha's revolutionary platform that keeps your financial data completely private while enabling seamless transactions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in-up staggered-animation" style={{ '--stagger': 3 } as any}>
          <button className="neumorphic-btn px-8 py-4 text-lg font-semibold text-white min-w-[200px] group">
            <span className="relative z-10">Get Early Access</span>
            <div className="absolute inset-0 bg-gradient-to-r from-linksuraksha-purple to-linksuraksha-glow opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300" />
          </button>
          <button className="glassmorphism px-8 py-4 text-lg font-semibold text-white hover:bg-white/20 transition-all duration-300 rounded-xl">
            Watch Demo
          </button>
        </div>

        {/* Encrypted UI Elements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 fade-in-up staggered-animation" style={{ '--stagger': 4 } as any}>
          {[
            { icon: '🔐', title: 'Bank-Grade Encryption', desc: 'Military-level security protocols' },
            { icon: '⚡', title: 'Instant Transactions', desc: 'Lightning-fast processing' },
            { icon: '🛡️', title: 'Zero Data Exposure', desc: 'Your info stays completely private' }
          ].map((feature, index) => (
            <div key={index} className="glassmorphism p-6 rounded-2xl hover:bg-white/15 transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
