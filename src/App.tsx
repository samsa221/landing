import React, { useState } from 'react';
import { Mail, User, BookOpen, Lightbulb, Heart, Brain, Youtube, Twitter, Instagram } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-amber-500/5"></div>
        
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Stop Chasing{' '}
                <span className="text-amber-400">Shadows</span>.
              </h1>
              <h2 className="text-3xl lg:text-4xl font-light text-gray-300">
                Start Living With <span className="text-white font-medium">Clarity</span>.
              </h2>
            </div>
            
            <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
              Discover the philosophical foundations that lead to genuine fulfillment in our chaotic world.
            </p>

            {/* Email Form */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
              <h3 className="text-2xl font-semibold mb-4 text-center">
                Get Your Free Guide
              </h3>
              <p className="text-amber-400 text-center mb-6 font-medium">
                "The Business of Happiness"
              </p>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-green-400 font-medium">Thank you! Check your email for the guide.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-4 bg-gray-900 border border-gray-600 rounded-xl focus:outline-none focus:border-amber-400 transition-colors text-white placeholder-gray-400"
                    />
                  </div>
                  
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your email address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-4 bg-gray-900 border border-gray-600 rounded-xl focus:outline-none focus:border-amber-400 transition-colors text-white placeholder-gray-400"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 text-lg"
                  >
                    Send Me the Guide
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Content - PDF Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-3xl border border-gray-700 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <div className="w-64 h-80 bg-gradient-to-b from-amber-50 to-amber-100 rounded-2xl shadow-inner relative overflow-hidden">
                  <div className="absolute inset-4 space-y-3">
                    <div className="h-8 bg-gray-800 rounded opacity-80"></div>
                    <div className="h-1 bg-amber-400 w-12 rounded"></div>
                    <div className="space-y-2 mt-8">
                      <div className="h-2 bg-gray-700 rounded w-full opacity-60"></div>
                      <div className="h-2 bg-gray-700 rounded w-5/6 opacity-60"></div>
                      <div className="h-2 bg-gray-700 rounded w-4/6 opacity-60"></div>
                    </div>
                    <div className="mt-6 space-y-2">
                      <div className="h-2 bg-gray-700 rounded w-full opacity-40"></div>
                      <div className="h-2 bg-gray-700 rounded w-3/4 opacity-40"></div>
                      <div className="h-2 bg-gray-700 rounded w-5/6 opacity-40"></div>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <div className="w-8 h-8 bg-amber-400 rounded-full opacity-80"></div>
                    </div>
                  </div>
                </div>
                <p className="text-center mt-4 text-amber-400 font-medium">The Business of Happiness</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="py-24 px-6 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why This Matters</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-amber-400/25 transition-shadow duration-300">
                <Brain className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Mental Clarity</h3>
              <p className="text-gray-400 leading-relaxed">
                Cut through the noise of modern life and discover what truly drives fulfillment and purpose.
              </p>
            </div>
            
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-amber-400/25 transition-shadow duration-300">
                <Heart className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Emotional Freedom</h3>
              <p className="text-gray-400 leading-relaxed">
                Learn to navigate emotions with wisdom, breaking free from reactive patterns that hold you back.
              </p>
            </div>
            
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-amber-400/25 transition-shadow duration-300">
                <Lightbulb className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Practical Wisdom</h3>
              <p className="text-gray-400 leading-relaxed">
                Ancient philosophy meets modern psychology to create actionable insights for daily life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About the Creator Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">About the Creator</h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  I've spent over a decade studying philosophy, psychology, and the intersection between ancient wisdom and modern living. What started as personal curiosity became a mission to help others find genuine clarity in an increasingly complex world.
                </p>
                <p>
                  Through Pursuit of Shadows, I explore the deeper questions that shape our daily experience, offering practical insights that bridge the gap between philosophical theory and real-world application.
                </p>
                <p>
                  My approach combines rigorous thinking with compassionate understanding, helping viewers develop the mental tools needed for authentic fulfillment.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-full blur-2xl"></div>
                <div className="relative w-64 h-64 bg-gradient-to-b from-gray-700 to-gray-800 rounded-full flex items-center justify-center border border-gray-600">
                  <User className="w-24 h-24 text-amber-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-gray-900/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">What Viewers Are Saying</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-amber-400/50 transition-colors duration-300">
              <p className="text-gray-300 mb-6 italic leading-relaxed">
                "This channel completely shifted my perspective on what happiness actually means. The clarity is life-changing."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">M</span>
                </div>
                <div>
                  <p className="font-semibold">Maria Chen</p>
                  <p className="text-sm text-gray-400">Entrepreneur</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-amber-400/50 transition-colors duration-300">
              <p className="text-gray-300 mb-6 italic leading-relaxed">
                "Finally, philosophy that actually applies to real life. These insights have helped me navigate major decisions with confidence."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">D</span>
                </div>
                <div>
                  <p className="font-semibold">David Rodriguez</p>
                  <p className="text-sm text-gray-400">Software Engineer</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-amber-400/50 transition-colors duration-300 md:col-span-2 lg:col-span-1">
              <p className="text-gray-300 mb-6 italic leading-relaxed">
                "The depth and practicality of these videos is unmatched. I've watched every single one multiple times."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">S</span>
                </div>
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-gray-400">Psychologist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-black border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-amber-400 mb-2">Pursuit of Shadows</h3>
              <p className="text-gray-400">Finding clarity in the complexity of existence</p>
            </div>
            
            <div className="flex justify-center space-x-8">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            
            <div className="flex justify-center space-x-8 text-sm text-gray-500">
              <a href="#" className="hover:text-amber-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-amber-400 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-amber-400 transition-colors duration-300">Contact</a>
            </div>
            
            <p className="text-gray-500 text-sm">
              © 2025 Pursuit of Shadows. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;