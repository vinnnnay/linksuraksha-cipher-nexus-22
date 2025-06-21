
import Navigation from '../components/Navigation';
import { Shield } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="glassmorphism inline-flex items-center space-x-2 px-6 py-3 rounded-full mb-8 fade-in-up">
              <Shield className="w-5 h-5 text-linksuraksha-glow" />
              <span className="text-sm font-medium text-gray-300">Get in Touch</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 fade-in-up staggered-animation" style={{ '--stagger': 1 } as any}>
              <span className="block text-white">Contact Our</span>
              <span className="block bg-gradient-to-r from-linksuraksha-glow to-linksuraksha-purple bg-clip-text text-transparent">
                Security Experts
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed fade-in-up staggered-animation" style={{ '--stagger': 2 } as any}>
              Have questions about LinkSuraksha? Our team of security and fintech experts is ready to help you secure your financial future.
            </p>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Contact Form */}
              <div className="glassmorphism p-8 rounded-3xl fade-in-up">
                <h2 className="text-3xl font-bold text-white mb-8">Send Us a Message</h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 glassmorphism rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-linksuraksha-glow focus:outline-none transition-all duration-300"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 glassmorphism rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-linksuraksha-glow focus:outline-none transition-all duration-300"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 glassmorphism rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-linksuraksha-glow focus:outline-none transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Company (Optional)</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 glassmorphism rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-linksuraksha-glow focus:outline-none transition-all duration-300"
                      placeholder="Your Company"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                    <select className="w-full px-4 py-3 glassmorphism rounded-xl text-white focus:ring-2 focus:ring-linksuraksha-glow focus:outline-none transition-all duration-300">
                      <option value="">Select a topic</option>
                      <option value="general">General Inquiry</option>
                      <option value="security">Security Questions</option>
                      <option value="partnership">Partnership</option>
                      <option value="press">Press & Media</option>
                      <option value="support">Technical Support</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea 
                      rows={6}
                      className="w-full px-4 py-3 glassmorphism rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-linksuraksha-glow focus:outline-none transition-all duration-300 resize-none"
                      placeholder="Tell us about your needs or questions..."
                    />
                  </div>
                  
                  <button type="submit" className="w-full neumorphic-btn py-4 text-lg font-semibold text-white group">
                    <span className="relative z-10">Send Message</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-linksuraksha-purple to-linksuraksha-glow opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300" />
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8 fade-in-up staggered-animation" style={{ '--stagger': 1 } as any}>
                
                {/* Office Info */}
                <div className="glassmorphism p-6 rounded-2xl">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">🏢</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Headquarters</h3>
                      <p className="text-gray-300">
                        123 Financial District<br />
                        San Francisco, CA 94111<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email Info */}
                <div className="glassmorphism p-6 rounded-2xl">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">📧</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                      <p className="text-linksuraksha-glow">contact@linksuraksha.com</p>
                      <p className="text-gray-400 text-sm mt-1">We typically respond within 24 hours</p>
                    </div>
                  </div>
                </div>

                {/* Phone Info */}
                <div className="glassmorphism p-6 rounded-2xl">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">📞</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                      <p className="text-linksuraksha-glow">+1 (555) 123-LINK</p>
                      <p className="text-gray-400 text-sm mt-1">Mon-Fri, 9AM-6PM PST</p>
                    </div>
                  </div>
                </div>

                {/* Security Info */}
                <div className="glassmorphism p-6 rounded-2xl">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">🔒</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Security Inquiries</h3>
                      <p className="text-linksuraksha-glow">security@linksuraksha.com</p>
                      <p className="text-gray-400 text-sm mt-1">For security researchers and vulnerability reports</p>
                    </div>
                  </div>
                </div>

                {/* Response Time */}
                <div className="glassmorphism p-6 rounded-2xl">
                  <h3 className="text-xl font-semibold text-white mb-4">Response Times</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-300">General Inquiries:</span>
                      <span className="text-linksuraksha-glow">24 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Security Issues:</span>
                      <span className="text-linksuraksha-glow">2 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Partnership Requests:</span>
                      <span className="text-linksuraksha-glow">48 hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
