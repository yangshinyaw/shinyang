
import React from 'react';
import { Code, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-emerald-500/20 relative bg-cyber-dark/80">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Code className="h-6 w-6 text-emerald-500 mr-2" />
              <span className="font-mono text-lg font-bold text-emerald-500">DEV.PORTFOLIO</span>
            </div>
            
            <p className="text-cyber-light/70 mb-6 max-w-md">
              Creating modern, high-performance web applications with cutting-edge technologies 
              to bring your ideas to life.
            </p>
            
            <div className="flex space-x-4">
              <a href="https://github.com/yangshinyaw" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 hover:bg-emerald-500/20 transition-all hover:scale-110">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/shin-yaw-yang-538798254/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 hover:bg-emerald-500/20 transition-all hover:scale-110">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 hover:bg-emerald-500/20 transition-all hover:scale-110">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="mailto:syty03@gmail.com" className="h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 hover:bg-emerald-500/20 transition-all hover:scale-110">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-mono font-bold mb-4 text-cyber-light border-b border-emerald-500/30 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-cyber-light/70 hover:text-emerald-500 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-cyber-light/70 hover:text-emerald-500 transition-colors">About</a>
              </li>
              <li>
                <a href="#projects" className="text-cyber-light/70 hover:text-emerald-500 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-cyber-light/70 hover:text-emerald-500 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-mono font-bold mb-4 text-cyber-light border-b border-emerald-500/30 pb-2">Contact</h3>
            <ul className="space-y-2">
              <li className="text-cyber-light/70">
                <a href="mailto:syty03@gmail.com" className="hover:text-emerald-500 transition-colors">syty03@gmail.com</a>
              </li>
              <li className="text-cyber-light/70">
                <a href="tel:+639614873084" className="hover:text-emerald-500 transition-colors">+63 961 487 3084</a>
              </li>
              <li className="text-cyber-light/70">City of San Fernando, Pampanga, Philippines</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-emerald-500/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-cyber-light/60 text-sm mb-4 md:mb-0">
            © {currentYear} Shin Yaw T. Yang. All rights reserved.
          </p>
          
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-cyber-light/60 hover:text-emerald-500 transition-colors">Privacy Policy</a>
            <a href="#" className="text-cyber-light/60 hover:text-emerald-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
