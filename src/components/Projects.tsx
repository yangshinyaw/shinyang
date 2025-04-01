import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight, Code, CheckCircle2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  liveDemo: string;
  category: 'all' | 'web' | 'mobile' | 'ai';
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'mobile' | 'ai'>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'CIAC HR Management System',
      description: 'Developed and deployed a full-stack HR Management System using React, TypeScript, and Supabase. Includes secure authentication with RBAC and document storage.',
      image: 'https://images.unsplash.com/photo-1664575196044-195f135295df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aHIlMjBzeXN0ZW18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      technologies: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'RBAC'],
      github: 'https://github.com/PaoloBaltazar/wanderful-guide',
      liveDemo: 'https://ciachr.online',
      category: 'web'
    },
    {
      id: 2,
      title: 'MunchMap Ordering System',
      description: 'Built a restaurant ordering system with React, Node.js, and PostgreSQL. Includes payment processing, real-time updates, and UI/UX optimizations.',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJlc3RhdXJhbnQlMjBvcmRlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Payment Processing', 'UI/UX'],
      github: 'https://github.com/yangshinyaw/MunchMap',
      liveDemo: 'https://munch-maps.vercel.app/',
      category: 'web'
    },
    {
      id: 3,
      title: 'Text Detection and Extraction',
      description: 'Developed a Python-based Optical Character Recognition (OCR) system using OpenCV and tesseract OCR to detect and extract text from images.',
      image: 'https://images.unsplash.com/photo-1607798748738-b15c34b2d89e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWklMjBjb250ZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      technologies: ['Python', 'Flask', 'OpenCV', 'tesseract OCR', 'NLP'],
      github: 'https://github.com/yangshinyaw/TextExtraction_OCR_BERT',
      liveDemo: 'https://github.com/yangshinyaw/TextExtraction_OCR_BERT',
      category: 'ai'
    },
    {
      id: 4,
      title: 'BetFi',
      description: 'Decentralized betting platform built with smart contracts that enables users to create and join prediction markets with cryptocurrency.',
      image: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3J5cHRvJTIwYmV0dGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
      technologies: ['Solidity', 'React', 'Web3.js', 'Ethereum', 'Smart Contracts'],
      github: 'https://github.com/yangshinyaw/BetFi',
      liveDemo: 'https://bet-fi.vercel.app/',
      category: 'web'
    },
    {
      id: 5,
      title: 'Paw Finder',
      description: 'Pet adoption mobile app that connects shelters with potential adopters. Features include pet profiles, adoption tracking, and in-app messaging.',
      image: 'https://images.unsplash.com/photo-1601758174114-e711c0cbaa69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBldCUyMGFkb3B0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      technologies: ['React Native', 'Firebase', 'Node.js', 'Google Maps API', 'Push Notifications'],
      github: 'https://github.com/yangshinyaw/PawFinder',
      liveDemo: 'https://paw-finder-one.vercel.app/',
      category: 'mobile'
    },
    {
      id: 6,
      title: 'NFT Marketplace',
      description: 'Digital marketplace for NFT creators and collectors with features for minting, buying, selling, and auctioning digital assets.',
      image: 'https://images.unsplash.com/photo-1642104704074-907c0698cbd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmZ0JTIwYXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      technologies: ['React', 'Solidity', 'IPFS', 'Ethereum', 'Web3.js'],
      github: 'https://github.com/yangshinyaw/Marketplace-NFT',
      liveDemo: 'https://github.com/yangshinyaw/Marketplace-NFT',
      category: 'web'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-glow-conic rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-glow-radial rounded-full opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4 cyber-heading mx-auto">Featured Projects</h2>
          <div className="h-px w-24 bg-cyber-primary/50 mx-auto mb-8"></div>
          <p className="text-lg text-cyber-light/90">
            Explore my recent work showcasing a variety of web applications and solutions. 
            Each project demonstrates different technical skills and approaches to solving real-world problems.
          </p>
        </div>
        
        {/* Project Filters */}
        <Tabs defaultValue="all" className="mb-12">
          <div className="flex justify-center">
            <TabsList className="bg-cyber-dark/50 backdrop-blur-sm border border-gray-700/30">
              <TabsTrigger 
                value="all" 
                onClick={() => setActiveFilter('all')}
                className="data-[state=active]:bg-cyber-primary/20 data-[state=active]:text-cyber-primary data-[state=active]:border-cyber-primary/50"
              >
                All Projects
              </TabsTrigger>
              <TabsTrigger 
                value="web" 
                onClick={() => setActiveFilter('web')}
                className="data-[state=active]:bg-cyber-primary/20 data-[state=active]:text-cyber-primary data-[state=active]:border-cyber-primary/50"
              >
                Web
              </TabsTrigger>
              <TabsTrigger 
                value="mobile" 
                onClick={() => setActiveFilter('mobile')}
                className="data-[state=active]:bg-cyber-primary/20 data-[state=active]:text-cyber-primary data-[state=active]:border-cyber-primary/50"
              >
                Mobile
              </TabsTrigger>
              <TabsTrigger 
                value="ai" 
                onClick={() => setActiveFilter('ai')}
                className="data-[state=active]:bg-cyber-primary/20 data-[state=active]:text-cyber-primary data-[state=active]:border-cyber-primary/50"
              >
                AI/ML
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="web" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="mobile" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="ai" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-16 text-center">
          <a href="https://github.com/yangshinyaw" target="_blank" rel="noopener noreferrer" className="cyber-button-green inline-flex items-center">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="cyber-card rounded-lg overflow-hidden group hover:translate-y-[-5px] transition-all duration-500 border-b-2 border-b-cyber-primary/40 h-full">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-cyber-dark/50 group-hover:bg-cyber-dark/30 transition-all duration-300"></div>
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-cyber-dark/70">
          <div className="flex space-x-4">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 bg-cyber-dark/80 text-cyber-primary rounded-full hover:bg-cyber-primary hover:text-cyber-dark transition-all"
              aria-label="View GitHub repository"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href={project.liveDemo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 bg-cyber-dark/80 text-cyber-primary rounded-full hover:bg-cyber-primary hover:text-cyber-dark transition-all"
              aria-label="View live demo"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="absolute top-3 right-3">
          <span className="text-xs px-2 py-1 rounded bg-cyber-primary/80 text-cyber-dark font-mono uppercase tracking-wider">
            {project.category}
          </span>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-mono font-bold mb-2 text-cyber-primary group-hover:text-emerald-400 transition-colors">{project.title}</h3>
        <p className="text-cyber-light/70 mb-4 text-sm line-clamp-3">{project.description}</p>
        
        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="text-[10px] px-2 py-1 rounded bg-cyber-primary/10 text-cyber-primary border border-cyber-primary/30 flex items-center"
            >
              <CheckCircle2 className="h-2.5 w-2.5 mr-1" />
              {tech}
            </span>
          ))}
        </div>
        
        <a 
          href={project.liveDemo} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-cyber-primary text-sm flex items-center group/link hover:text-emerald-400"
        >
          Explore Project 
          <ArrowRight className="h-4 w-4 ml-1 transform transition-transform group-hover/link:translate-x-1" />
        </a>
      </CardContent>
    </Card>
  );
};

export default Projects;
