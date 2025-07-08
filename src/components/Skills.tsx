
import React from 'react';
import { Shield, Code, Database, Network, Bug, Lock } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Security Tools',
      icon: Shield,
      skills: [
        { name: 'Kali Linux', level: 85 },
        { name: 'Metasploit', level: 80 },
        { name: 'Nmap', level: 90 },
        { name: 'Wireshark', level: 85 },
        { name: 'Burp Suite', level: 75 },
      ]
    },
    {
      title: 'Programming',
      icon: Code,
      skills: [
        { name: 'Python', level: 90 },
        { name: 'JavaScript', level: 80 },
        { name: 'Bash', level: 85 },
        { name: 'PowerShell', level: 70 },
        { name: 'C++', level: 65 },
      ]
    },
    {
      title: 'Security Domains',
      icon: Lock,
      skills: [
        { name: 'Penetration Testing', level: 80 },
        { name: 'Vulnerability Assessment', level: 85 },
        { name: 'Digital Forensics', level: 70 },
        { name: 'Incident Response', level: 75 },
        { name: 'Risk Assessment', level: 80 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Technical <span className="text-cyber-blue">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-green mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-cyber-blue to-blue-600 rounded-lg mr-4">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-cyber-blue font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-cyber-blue to-cyber-green h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
