
import React, { useState } from 'react';
import { ExternalLink, Github, Heart, MessageCircle, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [likedProjects, setLikedProjects] = useState<Set<number>>(new Set());
  const [comments, setComments] = useState<{[key: number]: string}>({});
  const [showComments, setShowComments] = useState<{[key: number]: boolean}>({});

  const projects = [
    {
      id: 1,
      title: 'Vulnerability Scanner',
      description: 'A Python-based network vulnerability scanner that identifies security weaknesses in target systems.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
      tags: ['Python', 'Nmap', 'Security'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      likes: 24 + (likedProjects.has(1) ? 1 : 0),
      views: 156
    },
    {
      id: 2,
      title: 'Password Strength Analyzer',
      description: 'Web application that analyzes password strength and provides recommendations for improvement.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      tags: ['JavaScript', 'React', 'Security'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      likes: 18 + (likedProjects.has(2) ? 1 : 0),
      views: 98
    },
    {
      id: 3,
      title: 'Network Traffic Analyzer',
      description: 'Real-time network traffic monitoring tool with anomaly detection capabilities.',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=400&fit=crop',
      tags: ['Python', 'Wireshark', 'ML'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      likes: 31 + (likedProjects.has(3) ? 1 : 0),
      views: 203
    }
  ];

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
      // Here you would typically send the comment to your backend
    }
  };

  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Recent <span className="text-cyber-blue">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-green mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Explore my latest cybersecurity projects and security tools
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyber-green to-green-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyber-green/25 transition-all duration-300"
          >
            View All Projects
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-slate-700 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg">
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
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
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
                      <span className="text-sm">{project.likes}</span>
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
                      className="w-full p-2 bg-slate-600 text-white rounded-lg resize-none"
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
    </section>
  );
};

export default Projects;
