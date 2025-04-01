
import React from 'react';
import { Code2, Database, Globe, Smartphone, Figma, Server } from 'lucide-react';

const About = () => {
  const skills = [
    { name: "Frontend Development", icon: <Code2 className="h-6 w-6" />, description: "React, Next.js, Node.js, TypeScript, Tailwind CSS" },
    { name: "Backend Development", icon: <Server className="h-6 w-6" />, description: "Node.js, Flask, REST, GraphQL" },
    { name: "Database Management", icon: <Database className="h-6 w-6" />, description: "PostgreSQL, MongoDB, Firebase" },
    { name: "UI/UX Design", icon: <Figma className="h-6 w-6" />, description: "Tailwind CSS, Figma, Responsive Design" },
    { name: "Mobile Development", icon: <Smartphone className="h-6 w-6" />, description: "React Native" },
    { name: "DevOps", icon: <Globe className="h-6 w-6" />, description: "CyberOps, CyberSecurity, IoT" }
  ];

  return (
    <section id="about" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-glow-conic rounded-full opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4 cyber-heading mx-auto">About Me</h2>
            <div className="h-px w-24 bg-cyber-primary/50 mx-auto mb-8"></div>
            
            <p className="text-lg text-cyber-light/90 mb-6">
              I am a solution-oriented and problem solver with experience in full-stack development.
              Skilled in building scalable, efficient, and secure software solutions. Proficient in technical 
              documentation, collaboration, and debugging complex systems.
            </p>
            
            <p className="text-lg text-cyber-light/90">
              Currently pursuing a Bachelor's Degree in Computer Science at Holy Angel University (HAU),
              I have gained valuable experience through internships and development roles. My work experience includes
              developing HR Management Systems, restaurant ordering systems, and working with various technologies.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-mono font-bold mb-8 text-center">Technical Skills</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="cyber-card rounded flex flex-col items-center text-center group"
                >
                  <div className="h-16 w-16 rounded-full bg-cyber-dark flex items-center justify-center border border-cyber-primary/40 mb-4 group-hover:border-cyber-primary group-hover:animate-pulse-glow transition-all">
                    <span className="text-cyber-primary">{skill.icon}</span>
                  </div>
                  <h4 className="text-xl font-mono font-medium mb-2 text-cyber-primary">{skill.name}</h4>
                  <p className="text-cyber-light/70">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
