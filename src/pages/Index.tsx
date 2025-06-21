
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import SecuritySection from '../components/SecuritySection';
import { Shield } from 'lucide-react';

const Index = () => {
  const benefits = [
    {
      title: 'For Users',
      items: [
        'Complete financial privacy',
        'Protection from data breaches',
        'Control over spending limits',
        'No more sharing bank details'
      ]
    },
    {
      title: 'For Merchants',
      items: [
        'Reduced fraud liability',
        'Faster payment processing',
        'Higher customer trust',
        'Simplified compliance'
      ]
    }
  ];

  const faqs = [
    {
      question: 'How does LinkSuraksha protect my bank account information?',
      answer: 'LinkSuraksha uses advanced tokenization technology to create virtual payment tokens that replace your real account numbers. Your actual bank details never leave your device or get shared with merchants.'
    },
    {
      question: 'Is LinkSuraksha compatible with my existing bank accounts?',
      answer: 'Yes! LinkSuraksha works with virtually all major banks and credit cards. Our platform integrates seamlessly with your existing financial accounts.'
    },
    {
      question: 'What happens if a merchant gets hacked?',
      answer: 'If a merchant experiences a data breach, only temporary tokens are exposed - never your real financial information. These tokens can be instantly deactivated with no impact on your actual accounts.'
    },
    {
      question: 'How much does LinkSuraksha cost?',
      answer: 'LinkSuraksha offers flexible pricing plans starting with a free tier for basic protection, with premium features available through our subscription plans.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <SecuritySection />
        
        {/* Benefits Section */}
        <section id="benefits" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 fade-in-up">
              <div className="glassmorphism inline-flex items-center space-x-2 px-6 py-3 rounded-full mb-6">
                <Shield className="w-5 h-5 text-linksuraksha-glow" />
                <span className="text-sm font-medium text-gray-300">Benefits</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Benefits for Everyone
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                LinkSuraksha creates value for both consumers and businesses through enhanced security and trust.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="glassmorphism p-8 rounded-3xl fade-in-up staggered-animation"
                  style={{ '--stagger': index } as any}
                >
                  <h3 className="text-3xl font-bold text-white mb-8 text-center">
                    {benefit.title}
                  </h3>
                  <div className="space-y-4">
                    {benefit.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-4">
                        <div className="w-6 h-6 glassmorphism rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-linksuraksha-glow rounded-full" />
                        </div>
                        <span className="text-gray-300 text-lg">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 relative">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16 fade-in-up">
              <div className="glassmorphism inline-flex items-center space-x-2 px-6 py-3 rounded-full mb-6">
                <Shield className="w-5 h-5 text-linksuraksha-glow" />
                <span className="text-sm font-medium text-gray-300">FAQ</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Frequently Asked
                <span className="block bg-gradient-to-r from-linksuraksha-glow to-linksuraksha-purple bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="glassmorphism p-8 rounded-2xl fade-in-up staggered-animation"
                  style={{ '--stagger': index } as any}
                >
                  <h3 className="text-xl font-bold text-white mb-4">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mobile App Section */}
        <section id="mobile-app" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="glassmorphism rounded-3xl p-12 text-center fade-in-up relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-linksuraksha-purple/20 via-transparent to-linksuraksha-glow/20" />
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-24 h-24 glassmorphism rounded-full mb-8 animate-glow-pulse">
                  <span className="text-4xl">📱</span>
                </div>
                
                <h2 className="text-4xl font-bold text-white mb-6">
                  Mobile App Coming Soon
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Take LinkSuraksha with you everywhere. Our mobile app will provide the same enterprise-grade security in a beautiful, intuitive interface.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <div className="glassmorphism px-6 py-3 rounded-xl">
                    <span className="text-gray-300">🍎 iOS App Store</span>
                  </div>
                  <div className="glassmorphism px-6 py-3 rounded-xl">
                    <span className="text-gray-300">🤖 Google Play Store</span>
                  </div>
                </div>
                
                <p className="text-gray-400 mt-6">
                  Join our beta program to get early access
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <Shield className="w-8 h-8 text-linksuraksha-glow animate-glow-pulse" />
                  <span className="text-2xl font-bold bg-gradient-to-r from-linksuraksha-glow to-linksuraksha-purple bg-clip-text text-transparent">
                    LinkSuraksha
                  </span>
                </div>
                <p className="text-gray-300 mb-6 max-w-md">
                  Revolutionizing digital payments through privacy-first security technology that keeps your financial data completely protected.
                </p>
                <button className="neumorphic-btn px-6 py-3 text-white font-semibold">
                  Get Early Access
                </button>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-4">Company</h4>
                <div className="space-y-3">
                  <a href="/about" className="block text-gray-300 hover:text-linksuraksha-glow transition-colors duration-300">About Us</a>
                  <a href="/contact" className="block text-gray-300 hover:text-linksuraksha-glow transition-colors duration-300">Contact</a>
                  <a href="/blog" className="block text-gray-300 hover:text-linksuraksha-glow transition-colors duration-300">Blog</a>
                </div>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-4">Legal</h4>
                <div className="space-y-3">
                  <a href="#" className="block text-gray-300 hover:text-linksuraksha-glow transition-colors duration-300">Privacy Policy</a>
                  <a href="#" className="block text-gray-300 hover:text-linksuraksha-glow transition-colors duration-300">Terms of Service</a>
                  <a href="#" className="block text-gray-300 hover:text-linksuraksha-glow transition-colors duration-300">Security</a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-white/10 pt-8 text-center">
              <p className="text-gray-400">
                © 2024 LinkSuraksha. All rights reserved. Built with privacy and security first.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
