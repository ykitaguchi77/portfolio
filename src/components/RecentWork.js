import React, { useState } from 'react';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative overflow-hidden rounded-lg shadow-md group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={`${process.env.PUBLIC_URL}${project.image}`} alt={project.title} className="w-full h-64 object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h3 className="text-white text-2xl font-bold text-center">{project.title}</h3>
      </div>
      <div className={`absolute inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center p-4 transition-all duration-300 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <p className={`text-white text-center mb-4 transform transition-all duration-300 ease-in-out ${isHovered ? 'translate-y-0' : 'translate-y-4'}`}>{project.description}</p>
        <a href="#" className={`bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors transform transition-all duration-300 ease-in-out ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          Visit Website
        </a>
      </div>
    </div>
  );
};

const RecentWork = () => {
  const projects = [
    {
      title: 'Secure Smartphone Photo Collection',
      description: 'Smartphone app to support safe and anonymous collection of photos across multiple facilities',
      image: '/images/corneapp.jpg'
    },
    {
      title: 'CorneAI_for_iOS',
      description: 'Smartphone implementation of anterior segment disease classification AI',
      image: '/images/corneai_ios.png'
    },
    {
      title: 'Thyroid Facial Diagnosis',
      description: "Smartphone implementation of Graves' orbitopathy recognition AI model",
      image: '/images/gravai_ios.png'
    },
    {
      title: 'Neuroband',
      description: 'Headband-Style Perceptual Trick Device for Alleviating Blepharospasm Symptoms (Patent Pending in Japan)',
      image: '/images/neuroband.png'
    }
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8">My Recent Work</h2>
        <p className="text-xl text-center mb-12">
          Here are a few recent research projects I've worked on. Want to see more?{' '}
          <a href="mailto:kitaguchi@yk-gankeisei.com" className="text-blue-600 hover:underline">Email</a> me.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentWork;
