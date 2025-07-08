
import React from 'react';
import { Shield, Target, Users, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Shield, label: 'Security Projects', value: '15+' },
    { icon: Target, label: 'CTF Competitions', value: '8' },
    { icon: Users, label: 'Team Collaborations', value: '12' },
    { icon: Award, label: 'Certifications', value: '5' },
  ];

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            About <span className="text-cyber-blue">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-green mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo and info */}
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue to-cyber-green rounded-full opacity-75 animate-pulse"></div>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face"
                alt="Alex Johnson"
                className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-2xl"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Cybersecurity Enthusiast & Future Security Professional
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a dedicated cybersecurity undergraduate student with a passion for ethical hacking 
              and digital forensics. My journey in cybersecurity began with curiosity about how systems 
              work and evolved into a mission to protect organizations from cyber threats.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Currently, I'm focused on developing expertise in penetration testing, vulnerability 
              assessment, and incident response. I actively participate in Capture The Flag (CTF) 
              competitions and contribute to open-source security tools.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors">
                  <stat.icon className="w-8 h-8 text-cyber-blue mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <a
                href="/resume.pdf"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyber-green to-green-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyber-green/25 transition-all duration-300 transform hover:scale-105"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
