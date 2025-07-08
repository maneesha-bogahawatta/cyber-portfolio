
import React, { useState } from 'react';
import { ExternalLink, Github, Heart, MessageCircle, Eye, Filter } from 'lucide-react';
import Navigation from '../components/Navigation';

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [likedProjects, setLikedProjects] = useState<Set<number>>(new Set());
  const [comments, setComments] = useState<{[key: number]: string}>({});
  const [showComments, setShowComments] = useState<{[key: number]: boolean}>({});

  const categories = ['All', 'Web Security', 'Network Security', 'Mobile Security', 'Tools', 'Research'];

  const projects = [
    {
      id: 1,
      title: 'Vulnerability Scanner',
      description: 'A comprehensive Python-based network vulnerability scanner that identifies security weaknesses in target systems using multiple scanning techniques.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
      tags: ['Python', 'Nmap', 'Security'],
      category: 'Network Security',
      github: 'https://github.com',
      demo: 'https://demo.com',
      likes: 24,
      views: 156,
      date: '2024-01-15'
    },
    {
      id: 2,
      title: 'Password Strength Analyzer',
      description: 'Web application that analyzes password strength using advanced algorithms and provides detailed recommendations for improvement.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      tags: ['JavaScript', 'React', 'Security'],
      category: 'Web Security',
      github: 'https://github.com',
      demo: 'https://demo.com',
      likes: 18,
      views: 98,
      date: '2024-02-20'
    },
    {
      id: 3,
      title: 'Network Traffic Analyzer',
      description: 'Real-time network traffic monitoring tool with machine learning-based anomaly detection capabilities.',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=400&fit=crop',
      tags: ['Python', 'Wireshark', 'ML'],
      category: 'Network Security',
      github: 'https://github.com',
      demo: 'https://demo.com',
      likes: 31,
      views: 203,
      date: '2024-03-10'
    },
    {
      id: 4,
      title: 'Mobile App Security Tester',
      description: 'Automated testing framework for identifying common security vulnerabilities in mobile applications.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
      tags: ['Java', 'Android', 'Security'],
      category: 'Mobile Security',
      github: 'https://github.com',
      demo: 'https://demo.com',
      likes: 15,
      views: 87,
      date: '2024-02-05'
    },
    {
      id: 5,
      title: 'Phishing Detection System',
      description: 'Machine learning-based system that detects phishing websites using URL analysis and content inspection.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      tags: ['Python', 'ML', 'Web Security'],
      category: 'Web Security',
      github: 'https://github.com',
      demo: 'https://demo.com',
      likes: 42,
      views: 312,
      date: '2024-01-28'
    },
    {
      id: 6,
      title: 'Cryptography Toolkit',
      description: 'Collection of cryptographic algorithms and tools for educational and research purposes.',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=400&fit=crop',
      tags: ['Python', 'Cryptography', 'Education'],
      category: 'Tools',
      github: 'https://github.com',
      demo: 'https://demo.com',
      likes: 28,
      views: 145,
      date: '2024-03-01'
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const toggleLike = (projectId: number) => {
    const newLiked = new Set(likedProjects);
    if (newLiked.has(projectId)) {
      newLiked.delete(projectId);
    } else {
      newLiked.add(projectId);
    }
    setLikedProjects(newLiked);
  };

  const handleCommentSubmit = (projectId: number, e: React.FormEvent) => {
    e.preventDefault();
    const comment = comments[projectId];
    if (comment?.trim()) {
      console.log(`Comment for project ${projectId}: ${comment}`);
      setComments(prev => ({ ...prev, [projectId]: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">
              My <span className="text-cyber-blue">Projects</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-green mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Explore my portfolio of cybersecurity projects, tools, and research work. 
              From vulnerability scanners to security analysis tools, each project demonstrates 
              practical applications of cybersecurity concepts.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyber-blue to-blue-600 text-white shadow-lg'
                    : 'bg-slate-800 text-gray-400 hover:text-white hover:bg-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-slate-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-slate-900/80 rounded-full px-3 py-1 flex items-center space-x-1">
                    <Eye size={14} className="text-gray-400" />
                    <span className="text-gray-400 text-sm">{project.views}</span>
                  </div>
                  <div className="absolute top-4 left-4 bg-cyber-blue/80 rounded-full px-3 py-1">
                    <span className="text-white text-xs font-semibold">{project.category}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <span className="text-gray-500 text-sm">{project.date}</span>
                  </div>
                  
                  <p className="text-gray-400 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-cyber-blue/20 text-cyber-blue text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        className="text-gray-400 hover:text-cyber-blue transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={project.demo}
                        className="text-gray-400 hover:text-cyber-green transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>

                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => toggleLike(project.id)}
                        className={`flex items-center space-x-1 transition-colors ${
                          likedProjects.has(project.id) ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
                        }`}
                      >
                        <Heart size={16} fill={likedProjects.has(project.id) ? 'currentColor' : 'none'} />
                        <span className="text-sm">{project.likes + (likedProjects.has(project.id) ? 1 : 0)}</span>
                      </button>
                      <button
                        onClick={() => setShowComments(prev => ({ ...prev, [project.id]: !prev[project.id] }))}
                        className="text-gray-400 hover:text-cyber-blue transition-colors"
                      >
                        <MessageCircle size={16} />
                      </button>
                    </div>
                  </div>

                  {showComments[project.id] && (
                    <form onSubmit={(e) => handleCommentSubmit(project.id, e)} className="mt-4">
                      <textarea
                        value={comments[project.id] || ''}
                        onChange={(e) => setComments(prev => ({ ...prev, [project.id]: e.target.value }))}
                        placeholder="Add a comment..."
                        className="w-full p-2 bg-slate-700 text-white rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-cyber-blue"
                        rows={3}
                      />
                      <button
                        type="submit"
                        className="mt-2 px-4 py-2 bg-cyber-blue text-white rounded-lg hover:bg-blue-600 transition-colors"
                      >
                        Submit
                      </button>
                    </form>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
