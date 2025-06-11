import React, { useState } from 'react';
import { Shield, Cloud, Monitor, Eye, Target, FileCheck } from 'lucide-react';

const services = [
  {
    id: 'network',
    title: 'Network Security',
    icon: Shield,
    description: 'Protection from unauthorized access, firewalls, intrusion detection.',
    features: ['Advanced Firewall Protection', 'Intrusion Detection Systems', 'Network Monitoring', 'Access Control']
  },
  {
    id: 'cloud',
    title: 'Cloud Security',
    icon: Cloud,
    description: 'Secure cloud apps & infrastructure (AWS, Azure, GCP).',
    features: ['Multi-Cloud Protection', 'Identity Management', 'Data Encryption', 'Compliance Monitoring']
  },
  {
    id: 'endpoint',
    title: 'Endpoint Protection',
    icon: Monitor,
    description: 'Antivirus, device control, remote device security.',
    features: ['Real-time Threat Detection', 'Device Management', 'Remote Monitoring', 'Malware Protection']
  },
  {
    id: 'threat',
    title: 'Threat Intelligence',
    icon: Eye,
    description: 'Real-time monitoring, incident response, zero-day threat prevention.',
    features: ['24/7 Monitoring', 'Incident Response', 'Threat Analysis', 'Risk Assessment']
  },
  {
    id: 'penetration',
    title: 'Penetration Testing',
    icon: Target,
    description: 'Simulated attacks to test and improve system resilience.',
    features: ['Vulnerability Assessment', 'Security Testing', 'Risk Evaluation', 'Remediation Plans']
  },
  {
    id: 'compliance',
    title: 'Compliance & Audit',
    icon: FileCheck,
    description: 'Help with ISO, GDPR, HIPAA, SOC2 certifications.',
    features: ['Compliance Assessment', 'Audit Support', 'Policy Development', 'Certification Assistance']
  }
];

const Services = () => {
  const [activeTab, setActiveTab] = useState('network');
  const activeService = services.find(service => service.id === activeTab);

  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-[#8B5CF6]/20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Cybersecurity <span className="bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive security solutions tailored to protect your business from evolving cyber threats.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Service Tabs */}
          <div className="lg:col-span-1">
            <div className="space-y-2">
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveTab(service.id)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 group ${
                      activeTab === service.id
                        ? 'bg-gradient-to-r from-[#8B5CF6]/20 to-[#EC4899]/20 border border-[#8B5CF6]/30'
                        : 'bg-white/5 hover:bg-white/10 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg transition-all duration-300 ${
                        activeTab === service.id
                          ? 'bg-gradient-to-r from-[#8B5CF6] to-[#EC4899]'
                          : 'bg-white/10 group-hover:bg-white/20'
                      }`}>
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white text-sm">{service.title}</h3>
                        <p className="text-gray-400 text-xs mt-1">{service.description}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Service Details */}
          <div className="lg:col-span-2">
            {activeService && (
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] p-3 rounded-xl">
                    <activeService.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{activeService.title}</h3>
                    <p className="text-gray-300 mt-2">{activeService.description}</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {activeService.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg border border-white/10"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] rounded-full"></div>
                      <span className="text-gray-200">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <button className="bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] hover:from-[#A855F7] hover:to-[#F472B6] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;