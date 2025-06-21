
import Navigation from '../components/Navigation';
import { Shield } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Financial Privacy: Why Traditional Payment Methods Are Failing',
      excerpt: 'Explore how data breaches and financial fraud are driving the need for revolutionary privacy-first payment solutions.',
      date: 'December 15, 2024',
      readTime: '8 min read',
      category: 'Security',
      image: '🔒'
    },
    {
      id: 2,
      title: 'Understanding Tokenization: How LinkSuraksha Protects Your Bank Details',
      excerpt: 'A deep dive into the cryptographic techniques that keep your financial information completely private during transactions.',
      date: 'December 10, 2024',
      readTime: '6 min read',
      category: 'Technology',
      image: '🎯'
    },
    {
      id: 3,
      title: 'The Rise of Financial Cybercrime: Statistics That Will Shock You',
      excerpt: 'Latest data on financial fraud, identity theft, and how consumers can protect themselves in the digital age.',
      date: 'December 5, 2024',
      readTime: '5 min read',
      category: 'Industry',
      image: '📊'
    },
    {
      id: 4,
      title: 'Building Trust in Digital Payments: The LinkSuraksha Approach',
      excerpt: 'How we\'re revolutionizing consumer confidence in digital transactions through transparent security practices.',
      date: 'November 28, 2024',
      readTime: '7 min read',
      category: 'Company',
      image: '🛡️'
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
              <span className="text-sm font-medium text-gray-300">Insights & Updates</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 fade-in-up staggered-animation" style={{ '--stagger': 1 } as any}>
              <span className="block text-white">Security & Fintech</span>
              <span className="block bg-gradient-to-r from-linksuraksha-glow to-linksuraksha-purple bg-clip-text text-transparent">
                Insights Blog
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed fade-in-up staggered-animation" style={{ '--stagger': 2 } as any}>
              Stay informed about the latest developments in financial security, privacy technologies, and the future of digital payments.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="glassmorphism rounded-3xl p-8 lg:p-12 mb-16 fade-in-up relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-linksuraksha-purple/20 via-transparent to-linksuraksha-glow/20" />
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-6">
                  <span className="glassmorphism px-4 py-2 rounded-full text-sm font-medium text-linksuraksha-glow">Featured</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-400">{blogPosts[0].date}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-400">{blogPosts[0].readTime}</span>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
                      {blogPosts[0].title}
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                      {blogPosts[0].excerpt}
                    </p>
                    <button className="neumorphic-btn px-8 py-4 text-lg font-semibold text-white group">
                      <span className="relative z-10">Read Full Article</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-linksuraksha-purple to-linksuraksha-glow opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300" />
                    </button>
                  </div>
                  
                  <div className="glassmorphism rounded-2xl p-12 text-center">
                    <div className="text-8xl mb-4">{blogPosts[0].image}</div>
                    <div className="w-24 h-1 bg-gradient-to-r from-linksuraksha-purple to-linksuraksha-glow mx-auto rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-white mb-12 text-center fade-in-up">
              Latest Articles
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post, index) => (
                <article 
                  key={post.id}
                  className="glassmorphism rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-500 group fade-in-up staggered-animation hover:scale-105"
                  style={{ '--stagger': index } as any}
                >
                  <div className="p-8">
                    <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300 text-center">
                      {post.image}
                    </div>
                    
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="glassmorphism px-3 py-1 rounded-full text-xs font-medium text-linksuraksha-glow">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-sm">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-linksuraksha-glow transition-colors duration-300">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">{post.date}</span>
                      <button className="text-linksuraksha-glow hover:text-linksuraksha-purple transition-colors duration-300 font-medium">
                        Read More →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="glassmorphism rounded-3xl p-12 text-center fade-in-up">
              <div className="inline-flex items-center justify-center w-20 h-20 glassmorphism rounded-full mb-8 animate-glow-pulse">
                <Shield className="w-10 h-10 text-linksuraksha-glow" />
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-4">
                Stay Informed About Financial Security
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get the latest insights on financial privacy, security trends, and LinkSuraksha updates delivered to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-6 py-4 glassmorphism rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-linksuraksha-glow focus:outline-none transition-all duration-300"
                />
                <button className="neumorphic-btn px-8 py-4 text-white font-semibold whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              
              <p className="text-gray-400 text-sm mt-4">
                No spam, unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Blog;
