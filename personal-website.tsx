import React, { useState } from 'react';
import { Home, FileText, Folder, Info } from 'lucide-react';

const PersonalWebsite = () => {
  const [activeSection, setActiveSection] = useState('bio');

  const projects = [
    {
      category: 'Web Development',
      items: [
        { name: 'Portfolio Website', description: 'Personal portfolio site with React' },
        { name: 'E-commerce Platform', description: 'Full-stack online store' }
      ]
    },
    {
      category: 'Data Science',
      items: [
        { name: 'Predictive Analytics', description: 'Machine learning project' },
        { name: 'Data Visualization', description: 'Interactive dashboard' }
      ]
    }
  ];

  const sections = {
    bio: (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p>Software engineer passionate about creating innovative solutions. With a background in computer science and a love for technology, I enjoy building meaningful projects that solve real-world problems.</p>
      </div>
    ),
    projects: (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">My Projects</h2>
        {projects.map((category, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {category.items.map((project, idx) => (
                <div 
                  key={idx} 
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                >
                  <h4 className="font-bold mb-2">{project.name}</h4>
                  <p>{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    ),
    writing: (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">My Writing</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold">Tech Insights Blog</h3>
            <p>Exploring emerging technologies and software development trends</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold">Technical Tutorials</h3>
            <p>In-depth guides on programming and development best practices</p>
          </div>
        </div>
      </div>
    )
  };

  return (
    <div 
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: '#F3F1EA' }}
    >
      <nav className="bg-white shadow-md p-4 flex justify-center space-x-6">
        {[
          { key: 'bio', icon: Home, label: 'About' },
          { key: 'projects', icon: Folder, label: 'Projects' },
          { key: 'writing', icon: FileText, label: 'Writing' }
        ].map(({ key, icon: Icon, label }) => (
          <button
            key={key}
            onClick={() => setActiveSection(key)}
            className={`
              flex items-center space-x-2 px-4 py-2 rounded-lg 
              ${activeSection === key 
                ? 'bg-blue-100 text-blue-600' 
                : 'hover:bg-gray-100 text-gray-700'}
            `}
          >
            <Icon size={20} />
            <span>{label}</span>
          </button>
        ))}
      </nav>

      <main className="flex-grow container mx-auto max-w-4xl">
        {sections[activeSection]}
      </main>

      <footer className="bg-white p-4 text-center">
        <p>© 2024 My Personal Portfolio</p>
      </footer>
    </div>
  );
};

export default PersonalWebsite;
