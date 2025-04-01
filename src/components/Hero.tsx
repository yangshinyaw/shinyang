import React from 'react';
import { ArrowDown, Terminal, Code } from 'lucide-react';
import InteractiveTerminal from './InteractiveTerminal';
const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  // Matrix-like raining code effect for background
  const codeStrings = ['function init() { return true; }', 'const developer = new Developer();', 'while(true) { keepLearning(); }', 'if(coffee.isEmpty()) { refill(); }', '<div className="container"></div>', 'npm install future-skills', 'git commit -m "Fix everything"', 'export default Portfolio;', '// TODO: Write better code'];
  return <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 z-0 bg-cyber-grid animate-grid-flow opacity-70"></div>
      
      {/* Improved floating code strings in background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {codeStrings.map((code, index) => <div key={index} className="absolute text-emerald-500/30 font-mono text-sm whitespace-nowrap" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animation: `float ${5 + Math.random() * 10}s linear infinite`,
        opacity: 0.4 + Math.random() * 0.4,
        transform: `rotate(${Math.random() * 360}deg)`
      }}>
            {code}
          </div>)}
      </div>
      
      {/* Enhanced glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-cyber-dark to-transparent"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-2 mb-2">
              <Terminal className="h-6 w-6 text-emerald-400 animate-pulse" />
              <span className="font-mono text-gray-400 text-sm">root@developer:~$</span>
            </div>
            
            <h1 className="font-mono font-bold text-4xl md:text-5xl lg:text-6xl">
              <span className="text-white typing-effect shadow-text">SHIN YAW YANG</span>
            </h1>
            
            <div className="mt-2">
              <span className="text-emerald-400 cyber-text-glitch animate-pulse-glow md:text-2xl lg:text-3xl font-mono font-extrabold text-left text-4xl px-[18px] py-[9px]">Full-stack Developer</span>
            </div>
            
            <div className="border-l-2 border-emerald-500/40 pl-4 mt-8">
              <p className="text-xl text-gray-300/90 max-w-lg leading-relaxed">
                with expertise in building scalable, efficient, and secure software solutions.
              </p>
            </div>
            
            <div className="pt-6 flex flex-wrap gap-4">
              <button className="cyber-button-green group flex items-center space-x-2">
                <Code className="h-4 w-4 group-hover:animate-spin" />
                <span>View Projects</span>
              </button>
              <button className="bg-gray-800/80 backdrop-blur-sm text-gray-200 px-6 py-2 border border-emerald-500/30 font-medium transition-all hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] hover:border-emerald-500/60 flex items-center space-x-2">
                <span>Download Resume</span>
                <Code className="h-4 w-4 ml-2" />
              </button>
            </div>
          </div>
          
          <div className="w-full h-full">
            <InteractiveTerminal />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button onClick={scrollToAbout} className="flex items-center justify-center h-12 w-12 rounded-full border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10 transition-all">
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>;
};
export default Hero;