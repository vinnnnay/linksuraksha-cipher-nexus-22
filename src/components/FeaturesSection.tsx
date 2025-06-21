
import { Shield } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      title: 'Private Transaction Layer',
      description: 'Create secure, anonymous payment channels without exposing your actual bank account details to merchants or third parties.',
      icon: '🔒'
    },
    {
      title: 'Smart Payment Controls',
      description: 'Set spending limits, merchant restrictions, and time-based controls for maximum financial security and peace of mind.',
      icon: '⚙️'
    },
    {
      title: 'Real-time Fraud Detection',
      description: 'Advanced AI monitors every transaction for suspicious activity, instantly blocking potential threats before they occur.',
      icon: '🤖'
    },
    {
      title: 'Multi-Bank Integration',
      description: 'Connect multiple bank accounts and credit cards through a single secure interface with enterprise-grade encryption.',
      icon: '🏦'
    },
    {
      title: 'Merchant Verification',
      description: 'Every merchant is thoroughly vetted and verified before they can accept payments through our secure network.',
      icon: '✅'
    },
    {
      title: 'Transaction Analytics',
      description: 'Comprehensive insights and spending analytics while maintaining complete privacy of your financial data.',
      icon: '📊'
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="glassmorphism inline-flex items-center space-x-2 px-6 py-3 rounded-full mb-6">
            <Shield className="w-5 h-5 text-linksuraksha-glow" />
            <span className="text-sm font-medium text-gray-300">Advanced Features</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary Financial
            <span className="block bg-gradient-to-r from-linksuraksha-glow to-linksuraksha-purple bg-clip-text text-transparent">
              Security Features
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience next-generation financial technology designed to protect your privacy while enabling seamless digital transactions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glassmorphism p-8 rounded-2xl hover:bg-white/15 transition-all duration-500 group fade-in-up staggered-animation hover:scale-105"
              style={{ '--stagger': index } as any}
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-linksuraksha-glow transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 fade-in-up">
          <button className="neumorphic-btn px-8 py-4 text-lg font-semibold text-white group">
            <span className="relative z-10">Explore All Features</span>
            <div className="absolute inset-0 bg-gradient-to-r from-linksuraksha-purple to-linksuraksha-glow opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
