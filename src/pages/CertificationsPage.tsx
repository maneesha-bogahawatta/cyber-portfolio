
import React, { useState } from 'react';
import { Award, Calendar, ExternalLink, Download, X } from 'lucide-react';
import Navigation from '../components/Navigation';

const CertificationsPage = () => {
  const [selectedCert, setSelectedCert] = useState<any>(null);

  const certifications = [
    {
      id: 1,
      name: 'CompTIA Security+',
      issuer: 'CompTIA',
      date: '2024-01-15',
      credentialId: 'SEC-2024-001',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
      description: 'Foundational cybersecurity certification covering network security, compliance and operational security.',
      skills: ['Network Security', 'Risk Management', 'Incident Response', 'Cryptography'],
      verifyUrl: 'https://verify.comptia.org',
      downloadUrl: '/certificates/security-plus.pdf'
    },
    {
      id: 2,
      name: 'Certified Ethical Hacker (CEH)',
      issuer: 'EC-Council',
      date: '2024-02-20',
      credentialId: 'CEH-2024-002',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      description: 'Comprehensive ethical hacking certification covering penetration testing methodologies.',
      skills: ['Penetration Testing', 'Vulnerability Assessment', 'Social Engineering', 'Malware Analysis'],
      verifyUrl: 'https://cert.eccouncil.org',
      downloadUrl: '/certificates/ceh.pdf'
    },
    {
      id: 3,
      name: 'CISSP Associate',
      issuer: '(ISC)²',
      date: '2024-03-10',
      credentialId: 'CISSP-A-2024-003',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=400&fit=crop',
      description: 'Associate level certification demonstrating knowledge of information security domains.',
      skills: ['Security Architecture', 'Access Control', 'Security Operations', 'Risk Assessment'],
      verifyUrl: 'https://www.isc2.org/member-verification',
      downloadUrl: '/certificates/cissp-associate.pdf'
    },
    {
      id: 4,
      name: 'GPEN - Penetration Testing',
      issuer: 'SANS/GIAC',
      date: '2024-01-28',
      credentialId: 'GPEN-2024-004',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
      description: 'Advanced penetration testing certification from SANS focusing on hands-on skills.',
      skills: ['Advanced Penetration Testing', 'Exploit Development', 'Post-Exploitation', 'Reporting'],
      verifyUrl: 'https://www.giac.org/certified-professional',
      downloadUrl: '/certificates/gpen.pdf'
    },
    {
      id: 5,
      name: 'AWS Security Specialty',
      issuer: 'Amazon Web Services',
      date: '2024-03-01',
      credentialId: 'AWS-SEC-2024-005',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      description: 'Specialized certification for securing AWS cloud environments and workloads.',
      skills: ['Cloud Security', 'AWS Services', 'Identity Management', 'Data Protection'],
      verifyUrl: 'https://aws.amazon.com/verification',
      downloadUrl: '/certificates/aws-security.pdf'
    },
    {
      id: 6,
      name: 'OSCP - Penetration Testing',
      issuer: 'Offensive Security',
      date: '2024-02-14',
      credentialId: 'OSCP-2024-006',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=400&fit=crop',
      description: 'Hands-on penetration testing certification requiring practical exploitation skills.',
      skills: ['Manual Exploitation', 'Buffer Overflows', 'Web Application Testing', 'Active Directory'],
      verifyUrl: 'https://www.offensive-security.com/verify',
      downloadUrl: '/certificates/oscp.pdf'
    }
  ];

  const openModal = (cert: any) => {
    setSelectedCert(cert);
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">
              <span className="text-cyber-blue">Certifications</span> & Credentials
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-green mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              A comprehensive collection of my professional cybersecurity certifications, 
              demonstrating expertise across various security domains and technologies.
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <div key={cert.id} className="bg-slate-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer"
                   onClick={() => openModal(cert)}>
                <div className="relative">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-cyber-blue/80 rounded-full p-2">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
                  <p className="text-cyber-blue font-semibold mb-2">{cert.issuer}</p>
                  
                  <div className="flex items-center text-gray-400 mb-4">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">{new Date(cert.date).toLocaleDateString()}</span>
                  </div>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">{cert.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.slice(0, 2).map((skill: string, index: number) => (
                      <span key={index} className="px-2 py-1 bg-cyber-green/20 text-cyber-green text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 2 && (
                      <span className="px-2 py-1 bg-gray-600 text-gray-300 text-xs rounded-full">
                        +{cert.skills.length - 2} more
                      </span>
                    )}
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-xs">ID: {cert.credentialId}</span>
                    <div className="flex space-x-2">
                      <button className="text-cyber-blue hover:text-blue-400 transition-colors">
                        <ExternalLink size={16} />
                      </button>
                      <button className="text-cyber-green hover:text-green-400 transition-colors">
                        <Download size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedCert.image}
                alt={selectedCert.name}
                className="w-full h-64 object-cover rounded-t-xl"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-slate-900/80 rounded-full p-2 text-white hover:bg-slate-700 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-8">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-cyber-blue mr-3" />
                <div>
                  <h2 className="text-2xl font-bold text-white">{selectedCert.name}</h2>
                  <p className="text-cyber-blue font-semibold">{selectedCert.issuer}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-white font-semibold mb-2">Issue Date</h4>
                  <p className="text-gray-400">{new Date(selectedCert.date).toLocaleDateString()}</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Credential ID</h4>
                  <p className="text-gray-400">{selectedCert.credentialId}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-white font-semibold mb-2">Description</h4>
                <p className="text-gray-400">{selectedCert.description}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Skills & Competencies</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCert.skills.map((skill: string, index: number) => (
                    <span key={index} className="px-3 py-1 bg-cyber-green/20 text-cyber-green text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={selectedCert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyber-blue to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  <ExternalLink size={20} className="mr-2" />
                  Verify Certificate
                </a>
                <a
                  href={selectedCert.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyber-green to-green-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  <Download size={20} className="mr-2" />
                  Download Certificate
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificationsPage;
