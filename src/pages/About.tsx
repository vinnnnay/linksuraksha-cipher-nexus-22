
import Navigation from '../components/Navigation';
import { Shield } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-Founder',
      background: 'Former VP of Security at major fintech company',
      image: '👩‍💼'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO & Co-Founder',
      background: 'Ex-cybersecurity architect at leading bank',
      image: '👨‍💻'
    },
    {
      name: 'Dr. Aisha Patel',
      role: 'Head of Cryptography',
      background: 'PhD in Applied Cryptography, MIT',
      image: '👩‍🔬'
    },
    {
      name: 'James Wilson',
      role: 'Head of Product',
      background: 'Former product lead at digital payment platform',
      image: '👨‍💼'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="glassmorphism inline-flex items-center space-x-2 px-6 py-3 rounded-full mb-8 fade-in-up">
              <Shield className="w-5 h-5 text-linksuraksha-glow" />
              <span className="text-sm font-medium text-gray-300">About LinkSuraksha</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 fade-in-up staggered-animation" style={{ '--stagger': 1 } as any}>
              <span className="block text-white">Redefining Financial</span>
              <span className="block bg-gradient-to-r from-linksuraksha-glow to-linksuraksha-purple bg-clip-text text-transparent">
                Privacy & Security
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed fade-in-up staggered-animation" style={{ '--stagger': 2 } as any}>
              Founded in 2024, LinkSuraksha emerged from a simple yet powerful vision: financial transactions should be both seamless and completely private. We're building the future of digital payments where your personal financial data never leaves your control.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="fade-in-up">
                <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  We believe that financial privacy is a fundamental right. In an era where data breaches and financial fraud are increasingly common, LinkSuraksha provides a revolutionary solution that keeps your sensitive information completely secure.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Our platform eliminates the need to share real bank account details with merchants, creating a secure barrier between your financial identity and the digital marketplace.
                </p>
              </div>
              
              <div className="glassmorphism p-8 rounded-3xl fade-in-up">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 glassmorphism rounded-full mb-6 animate-glow-pulse">
                    <Shield className="w-12 h-12 text-linksuraksha-glow" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Privacy First</h3>
                  <p className="text-gray-300">
                    Every decision we make is guided by our commitment to protecting your financial privacy and security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Meet Our
                <span className="block bg-gradient-to-r from-linksuraksha-glow to-linksuraksha-purple bg-clip-text text-transparent">
                  Expert Team
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our leadership team combines decades of experience in fintech, cybersecurity, and financial services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  className="glassmorphism p-8 rounded-2xl text-center hover:bg-white/15 transition-all duration-500 group fade-in-up staggered-animation hover:scale-105"
                  style={{ '--stagger': index } as any}
                >
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {member.image}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-linksuraksha-glow transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-linksuraksha-glow font-medium mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.background}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 fade-in-up">
              <h2 className="text-4xl font-bold text-white mb-6">Our Core Values</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: '🔒', title: 'Security First', desc: 'Every feature is built with security as the foundation' },
                { icon: '🌟', title: 'Innovation', desc: 'Pushing the boundaries of financial technology' },
                { icon: '🤝', title: 'Trust', desc: 'Building long-term relationships through transparency' }
              ].map((value, index) => (
                <div 
                  key={index}
                  className="glassmorphism p-8 rounded-2xl text-center hover:bg-white/15 transition-all duration-500 group fade-in-up staggered-animation"
                  style={{ '--stagger': index } as any}
                >
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-linksuraksha-glow transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-300">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
