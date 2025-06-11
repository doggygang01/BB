import React from 'react';
import { Award, Globe, Users, Zap } from 'lucide-react';

const certifications = [
  'ISO 27001 Certified',
  'SOC 2 Type II',
  'CISSP Certified',
  'CISA Certified'
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-[#8B5CF6]/20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                About <span className="bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">BLOCKBREACH</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                We are a leading cybersecurity firm dedicated to protecting businesses from evolving digital threats. 
                Our mission is to secure the unseen vulnerabilities that could compromise your organization's integrity.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                With over a decade of experience and a team of certified security experts, we provide comprehensive 
                cybersecurity solutions that adapt to the ever-changing threat landscape. From small businesses to 
                enterprise corporations, we deliver tailored security strategies that protect what matters most.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <Globe className="h-8 w-8 text-[#8B5CF6] mb-3" />
                <div className="text-2xl font-bold text-white mb-1">Global</div>
                <div className="text-sm text-gray-300">Coverage</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <Zap className="h-8 w-8 text-[#EC4899] mb-3" />
                <div className="text-2xl font-bold text-white mb-1">Rapid</div>
                <div className="text-sm text-gray-300">Response</div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="flex items-center space-x-3 mb-6">
                <Award className="h-8 w-8 text-[#A855F7]" />
                <h3 className="text-2xl font-bold text-white">Certifications & Compliance</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-colors duration-300"
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] rounded-full mb-2"></div>
                    <div className="text-white font-medium text-sm">{cert}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="flex items-center space-x-3 mb-6">
                <Users className="h-8 w-8 text-[#EC4899]" />
                <h3 className="text-2xl font-bold text-white">Our Team</h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                Our expert team consists of certified cybersecurity professionals, ethical hackers, and compliance 
                specialists who work tirelessly to protect your digital assets. We stay ahead of emerging threats 
                through continuous learning and industry collaboration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;