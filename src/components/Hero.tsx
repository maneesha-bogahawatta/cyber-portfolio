
import React, { useEffect, useState } from 'react';
import { ChevronDown, Shield, Lock } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = ['Cybersecurity Student', 'Ethical Hacker', 'Security Analyst', 'Penetration Tester'];
  
  useEffect(() => {
    const currentRole = roles[currentIndex];
    if (displayText.length < currentRole.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      }, 150);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText('');
        setCurrentIndex((prev) => (prev + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [displayText, currentIndex]);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 animate-float">
          <Shield size={60} className="text-cyber-blue" />
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <Lock size={40} className="text-cyber-green" />
        </div>
        <div className="absolute bottom-32 left-1/4 animate-float">
          <Shield size={30} className="text-orange-400" />
        </div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-cyber-green">
              Alex Johnson
            </span>
          </h1>
          <div className="h-12 flex items-center justify-center">
            <p className="text-xl sm:text-2xl text-gray-300">
              <span className="text-cyber-blue">{displayText}</span>
              <span className="animate-blink">|</span>
            </p>
          </div>
        </div>

        <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto animate-slide-up">
          Passionate about cybersecurity, ethical hacking, and protecting digital assets. 
          Currently pursuing my degree while building practical skills in penetration testing and security analysis.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <button
            onClick={scrollToAbout}
            className="px-8 py-3 bg-gradient-to-r from-cyber-blue to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyber-blue/25 transition-all duration-300 transform hover:scale-105"
          >
            Learn More About Me
          </button>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-cyber-green text-cyber-green rounded-lg font-semibold hover:bg-cyber-green hover:text-slate-900 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-cyber-blue transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
