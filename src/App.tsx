import React, { useState } from 'react';
import { Mail, User, Calendar, CheckCircle, Clock, Zap,Phone, Youtube, Twitter, Instagram } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '',whatsapp:'' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Replace with your own Formspree endpoint
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mwpngvbw";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Error submitting form. Please check your connection.");
    }
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
                Never Miss Another{' '}
                <span className="text-amber-400">Appointment</span>.
              </h1>
              <h2 className="text-3xl lg:text-4xl font-light text-gray-300">
                Automate Your Bookings & Focus On <span className="text-white font-medium">What Matters</span>.
              </h2>
            </div>
            
            <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
              Our system helps coaches, consultants,dentists and service providers book clients 24/7—no manual scheduling, no back-and-forth emails.
            </p>

            {/* Email Form */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
              <h3 className="text-2xl font-semibold mb-4 text-center">
                Try It Free
              </h3>
              <p className="text-amber-400 text-center mb-6 font-medium">
                Sign up to Get Access to Live Webinar
              </p>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-green-400 font-medium">
                    Thank you! Check your email for access.
                  </p>
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
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="tel"
                      name="whatsapp"
                      placeholder="WhatsApp number (e.g. +233 541234567)"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-4 bg-gray-900 border border-gray-600 rounded-xl focus:border-amber-400 text-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 text-lg"
                  >
                    Get Started
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Content - Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-3xl border border-gray-700 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <div className="w-64 h-80 bg-gradient-to-b from-amber-50 to-amber-100 rounded-2xl shadow-inner flex flex-col items-center justify-center space-y-4">
                  <Calendar className="w-16 h-16 text-amber-500" />
                  <p className="text-lg font-semibold text-gray-800">Smart Booking Agents</p>
                  <p className="text-gray-600 text-sm text-center">See your appointments, reschedule with one click, and sync with Google Calendar.</p>
                </div>
                <p className="text-center mt-4 text-amber-400 font-medium">Your Automated Scheduler</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefit Section */}
      <section className="py-24 px-6 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Our System?</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Save Time</h3>
              <p className="text-gray-400 leading-relaxed">
                No more endless emails. Clients book directly into your calendar.
              </p>
            </div>
            
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Boost Bookings</h3>
              <p className="text-gray-400 leading-relaxed">
                Clients can book anytime, anywhere—leading to more appointments.
              </p>
            </div>
            
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">No Missed Calls</h3>
              <p className="text-gray-400 leading-relaxed">
                Automated reminders keep your clients showing up on time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-gray-900/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-amber-400 transition-colors duration-300">
              <p className="text-gray-300 mb-6 italic">
                "Since using this system, I doubled my bookings without lifting a finger."
              </p>
              <p className="font-semibold text-amber-400">— Coach Melissa</p>
            </div>
            
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-amber-400 transition-colors duration-300">
              <p className="text-gray-300 mb-6 italic">
                "Clients love how easy it is to schedule. I love how stress-free it makes my business."
              </p>
              <p className="font-semibold text-amber-400">— Dr. Ahmed, Dentist</p>
            </div>
            
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-amber-400 transition-colors duration-300">
              <p className="text-gray-300 mb-6 italic">
                "This tool is a game changer. More time for me, less hassle for clients."
              </p>
              <p className="font-semibold text-amber-400">— Sarah, Consultant</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-black border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-8">
            <div> 
              <h3 className="text-2xl font-bold text-amber-400 mb-2">SmartScheduler</h3>
              <p className="text-gray-400">Automating Appointments, Growing Businesses</p>
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
            
            <p className="text-gray-500 text-sm">
              © 2025 SmartScheduler. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
