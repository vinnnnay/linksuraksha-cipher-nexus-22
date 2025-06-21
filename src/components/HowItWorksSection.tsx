
import { Shield } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      step: '01',
      title: 'Connect Your Accounts',
      description: 'Securely link your bank accounts and credit cards through our encrypted platform. Your credentials are never stored or shared.',
      icon: '🔗'
    },
    {
      step: '02',
      title: 'Generate Virtual Tokens',
      description: 'Create unique, temporary payment tokens for each transaction. These tokens mask your real account details completely.',
      icon: '🎯'
    },
    {
      step: '03',
      title: 'Make Secure Payments',
      description: 'Pay merchants using virtual tokens instead of real account numbers. Your actual financial data remains completely private.',
      icon: '💳'
    },
    {
      step: '04',
      title: 'Monitor & Control',
      description: 'Track all transactions in real-time, set spending limits, and instantly disable tokens if needed for maximum security.',
      icon: '📱'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="glassmorphism inline-flex items-center space-x-2 px-6 py-3 rounded-full mb-6">
            <Shield className="w-5 h-5 text-linksuraksha-glow" />
            <span className="text-sm font-medium text-gray-300">Simple Process</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            How LinkSuraksha
            <span className="block bg-gradient-to-r from-linksuraksha-glow to-linksuraksha-purple bg-clip-text text-transparent">
              Protects You
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our revolutionary four-step process ensures your financial data stays completely private while enabling seamless transactions.
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-20 bottom-20 w-0.5 bg-gradient-to-b from-linksuraksha-purple via-linksuraksha-glow to-linksuraksha-purple opacity-50" />

          <div className="space-y-20">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                } fade-in-up staggered-animation`}
                style={{ '--stagger': index } as any}
              >
                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="glassmorphism inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-6">
                    <span className="text-linksuraksha-glow font-bold">Step {step.step}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    {step.title}
                  </h3>
                  <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                    {step.description}
                  </p>
                </div>

                {/* Visual Element */}
                <div className="flex-1 flex justify-center">
                  <div className="glassmorphism w-80 h-80 rounded-3xl flex items-center justify-center group hover:bg-white/15 transition-all duration-500 hover:scale-105">
                    <div className="text-center">
                      <div className="text-8xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {step.icon}
                      </div>
                      <div className="w-16 h-1 bg-gradient-to-r from-linksuraksha-purple to-linksuraksha-glow mx-auto rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 fade-in-up">
          <button className="neumorphic-btn px-8 py-4 text-lg font-semibold text-white group">
            <span className="relative z-10">Start Your Secure Journey</span>
            <div className="absolute inset-0 bg-gradient-to-r from-linksuraksha-purple to-linksuraksha-glow opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
