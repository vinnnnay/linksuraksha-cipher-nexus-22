
import { Shield } from 'lucide-react';

const SecuritySection = () => {
  const securityFeatures = [
    {
      title: 'End-to-End Encryption',
      description: 'AES-256 encryption protects all data transmission',
      icon: '🔐'
    },
    {
      title: 'Zero-Knowledge Architecture',
      description: 'We never see or store your actual financial data',
      icon: '🚫'
    },
    {
      title: 'Multi-Factor Authentication',
      description: 'Biometric and device-based security layers',
      icon: '🔒'
    },
    {
      title: 'Quantum-Resistant Security',
      description: 'Future-proof cryptographic protection',
      icon: '⚛️'
    }
  ];

  return (
    <section id="security" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-linksuraksha-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-linksuraksha-glow/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="glassmorphism inline-flex items-center space-x-2 px-6 py-3 rounded-full mb-6">
            <Shield className="w-5 h-5 text-linksuraksha-glow animate-glow-pulse" />
            <span className="text-sm font-medium text-gray-300">Military-Grade Security</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Unbreakable Security
            <span className="block bg-gradient-to-r from-linksuraksha-glow to-linksuraksha-purple bg-clip-text text-transparent">
              Architecture
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built with the most advanced security protocols used by financial institutions worldwide.
          </p>
        </div>

        {/* Main Security Visual */}
        <div className="glassmorphism rounded-3xl p-12 mb-16 fade-in-up relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-linksuraksha-purple/20 via-transparent to-linksuraksha-glow/20" />
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center justify-center w-32 h-32 glassmorphism rounded-full mb-8 animate-glow-pulse">
              <Shield className="w-16 h-16 text-linksuraksha-glow" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Your Data Never Leaves Your Control</h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              LinkSuraksha uses advanced tokenization and zero-knowledge protocols to ensure your financial information remains completely private and secure.
            </p>
          </div>
        </div>

        {/* Security Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <div 
              key={index}
              className="glassmorphism p-6 rounded-2xl text-center hover:bg-white/15 transition-all duration-500 group fade-in-up staggered-animation hover:scale-105"
              style={{ '--stagger': index } as any}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-linksuraksha-glow transition-colors duration-300">
                {feature.title}
              </h4>
              <p className="text-gray-400 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Compliance Section */}
        <div className="glassmorphism rounded-2xl p-8 text-center fade-in-up">
          <h3 className="text-2xl font-bold text-white mb-6">Industry Compliance & Standards</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {['PCI DSS Level 1', 'SOC 2 Type II', 'ISO 27001', 'GDPR Compliant', 'Bank Grade Security'].map((standard, index) => (
              <div key={index} className="glassmorphism px-4 py-2 rounded-full">
                <span className="text-linksuraksha-glow font-medium">{standard}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
