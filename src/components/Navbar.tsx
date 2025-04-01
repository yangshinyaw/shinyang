
import React, { useState, useEffect } from 'react';
import { Menu, X, Code, GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      setMenuOpen(false);
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-cyber-dark/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 text-emerald-500">
              <Code className="h-8 w-8" />
              <span className="font-mono text-lg font-bold tracking-tight">DEV.PORTFOLIO</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="nav-link text-cyber-light hover:text-emerald-500 transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="nav-link text-cyber-light hover:text-emerald-500 transition-colors">About</button>
            <button onClick={() => scrollToSection('projects')} className="nav-link text-cyber-light hover:text-emerald-500 transition-colors">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="cyber-button-green">Contact</button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-cyber-light">
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="md:hidden py-4 px-2 bg-cyber-dark/95 backdrop-blur-md border-t border-emerald-500/30">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="nav-link text-cyber-light hover:text-emerald-500 transition-colors py-2">Home</button>
              <button onClick={() => scrollToSection('about')} className="nav-link text-cyber-light hover:text-emerald-500 transition-colors py-2">About</button>
              <button onClick={() => scrollToSection('projects')} className="nav-link text-cyber-light hover:text-emerald-500 transition-colors py-2">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="cyber-button-green w-full text-center">Contact</button>
              
              <div className="flex space-x-4 pt-2 justify-center">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-cyber-light hover:text-emerald-500 transition-all transform hover:scale-110">
                  <GithubIcon className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-cyber-light hover:text-emerald-500 transition-all transform hover:scale-110">
                  <LinkedinIcon className="h-5 w-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-cyber-light hover:text-emerald-500 transition-all transform hover:scale-110">
                  <TwitterIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
