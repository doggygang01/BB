import React from 'react';
import { ArrowRight, Clock, Users, Shield, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6] via-[#A855F7] to-[#EC4899]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23FFFFFF%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        {/* Floating Geometric Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#8B5CF6]/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-[#A855F7]/30 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-[#EC4899]/30 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-10 w-16 h-16 bg-[#8B5CF6]/30 rounded-full blur-xl animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Animated Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#EC4899] rounded-full blur-xl opacity-30 group-hover:opacity-50 animate-pulse"></div>
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-3xl overflow-hidden border-4 border-white/20 backdrop-blur-sm bg-white/10 group-hover:scale-110 transition-all duration-500 animate-float">
                <img 
                  src="/blockbreach-logo.png" 
                  alt="BlockBreach Logo" 
                  className="w-full h-full object-cover transform group-hover:rotate-3 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              {/* Rotating Ring */}
              <div className="absolute inset-0 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 border-2 border-dashed border-white/30 rounded-full animate-spin-slow"></div>
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="block bg-gradient-to-r from-white via-[#8B5CF6] to-white bg-clip-text text-transparent animate-pulse">
                SECURING
              </span>
              <span className="block bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#EC4899] bg-clip-text text-transparent animate-gradient">
                THE UNSEEN
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
              Professional cybersecurity solutions protecting your digital assets with advanced threat detection and 24/7 monitoring.
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group animate-fade-in-up delay-100">
              <Clock className="h-8 w-8 text-[#8B5CF6] mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-2xl font-bold text-white mb-1">24/7</div>
              <div className="text-sm text-gray-300">Monitoring</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group animate-fade-in-up delay-200">
              <Users className="h-8 w-8 text-[#A855F7] mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-2xl font-bold text-white mb-1">95%+</div>
              <div className="text-sm text-gray-300">Customer Satisfaction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group animate-fade-in-up delay-300">
              <Shield className="h-8 w-8 text-[#EC4899] mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-2xl font-bold text-white mb-1">10+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group animate-fade-in-up delay-400">
              <TrendingUp className="h-8 w-8 text-[#8B5CF6] mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-2xl font-bold text-white mb-1">80%</div>
              <div className="text-sm text-gray-300">Reduced Downtime</div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <button 
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
              className="group bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] hover:from-[#A855F7] hover:to-[#F472B6] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center mx-auto space-x-2 animate-bounce-subtle"
            >
              <span>Get Started</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;