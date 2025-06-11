import React from 'react';
import { Clock, Users, Shield, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: '24/7 Monitoring',
    description: 'Round-the-clock surveillance and immediate response to security threats.',
    stat: '99.9%',
    statLabel: 'Uptime'
  },
  {
    icon: Users,
    title: '95%+ Satisfaction',
    description: 'Proven track record of client satisfaction and successful security implementations.',
    stat: '500+',
    statLabel: 'Happy Clients'
  },
  {
    icon: Shield,
    title: '10+ Years Experience',
    description: 'Decade of expertise in cybersecurity with cutting-edge solutions.',
    stat: '1000+',
    statLabel: 'Threats Blocked'
  },
  {
    icon: TrendingUp,
    title: '80% Reduced Downtime',
    description: 'Significant reduction in system downtime through proactive monitoring.',
    stat: '50+',
    statLabel: 'Certifications'
  }
];

const Features = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#8B5CF6]/20 to-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Why Choose <span className="bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">BLOCKBREACH</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our commitment to excellence and proven results make us the trusted choice for enterprise cybersecurity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const iconColors = ['text-[#8B5CF6]', 'text-[#A855F7]', 'text-[#EC4899]', 'text-[#8B5CF6]'];
            const gradientColors = [
              'from-[#8B5CF6] to-[#A855F7]',
              'from-[#A855F7] to-[#EC4899]',
              'from-[#EC4899] to-[#F472B6]',
              'from-[#8B5CF6] to-[#EC4899]'
            ];
            
            return (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
              >
                <div className="text-center">
                  <div className={`bg-gradient-to-r ${gradientColors[index]} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                  
                  <div className="space-y-1">
                    <div className={`text-3xl font-bold bg-gradient-to-r ${gradientColors[index]} bg-clip-text text-transparent`}>
                      {feature.stat}
                    </div>
                    <div className="text-sm text-gray-400">{feature.statLabel}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;