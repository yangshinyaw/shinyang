
import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, ChevronRight, Code, FileCode } from 'lucide-react';

const InteractiveTerminal: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [history, setHistory] = useState<string[]>([
    '> System initialized',
    '> Welcome to dev-terminal v1.0.2',
    '> Type or select "help" to see available commands',
    '> --------------------------------'
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const [cursorBlink, setCursorBlink] = useState<boolean>(true);

  useEffect(() => {
    // Focus the input when the component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }

    // Set up cursor blinking effect
    const blinkInterval = setInterval(() => {
      setCursorBlink(prev => !prev);
    }, 500);

    return () => clearInterval(blinkInterval);
  }, []);

  useEffect(() => {
    // Scroll to the bottom when history changes
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Common commands that can be clicked
  const quickCommands = [
    { name: 'about', description: 'Navigate to about section' },
    { name: 'projects', description: 'Navigate to projects section' },
    { name: 'contact', description: 'Navigate to contact section' },
    { name: 'help', description: 'Show available commands' }
  ];

  // Handler for form submission (when Enter is pressed)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add command to history
    const command = input.trim().toLowerCase();
    const newHistory = [...history, `> ${command}`];
    
    // Process command
    if (command === 'help') {
      newHistory.push(
        '  Available commands:',
        '  home - Navigate to home section',
        '  about - Navigate to about section',
        '  projects - Navigate to projects section',
        '  contact - Navigate to contact section',
        '  clear - Clear the terminal',
        '  help - Display available commands'
      );
    } else if (command === 'clear') {
      setHistory([
        '> Terminal cleared',
        '> --------------------------------'
      ]);
      setInput('');
      return;
    } else if (['home', 'about', 'projects', 'contact'].includes(command)) {
      newHistory.push(`  cd ${command} :: Navigating to ${command} section...`);
      
      // Scroll to the section
      const section = document.getElementById(command);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      newHistory.push(`  Command not found: ${input}. Type "help" for available commands.`);
    }
    
    setHistory(newHistory);
    setInput('');
  };

  const handleQuickCommand = (command: string) => {
    setInput(command);
    
    // Simulate form submission
    const event = { preventDefault: () => {} } as React.FormEvent;
    setTimeout(() => handleSubmit(event), 100);
  };

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div 
      className="cyber-border bg-black/90 backdrop-blur-sm p-4 rounded w-full h-full relative overflow-hidden before:cyber-terminal-lines"
      onClick={handleClick}
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyber-primary to-transparent opacity-50"></div>
      
      <div className="flex items-center mb-3 px-2 py-1 bg-cyber-primary/20 rounded">
        <TerminalIcon className="h-4 w-4 mr-2 text-cyber-primary" />
        <span className="text-sm font-mono text-cyber-primary">dev-terminal</span>
        <div className="ml-auto flex space-x-1">
          <div className="h-2 w-2 rounded-full bg-red-500/50"></div>
          <div className="h-2 w-2 rounded-full bg-yellow-500/50"></div>
          <div className="h-2 w-2 rounded-full bg-green-500/50"></div>
        </div>
      </div>
      
      <div 
        ref={terminalRef}
        className="font-mono text-sm md:text-base text-cyber-light/90 h-64 overflow-y-auto mb-2 scrollbar-thin scrollbar-thumb-cyber-primary/30 scrollbar-track-transparent terminal-lines"
      >
        {history.map((line, index) => (
          <div 
            key={index} 
            className={`mb-1 ${line.startsWith('  ') ? 'pl-4 text-cyber-light/70' : 'text-cyber-primary/90'}`}
          >
            {line}
          </div>
        ))}
      </div>
      
      <form onSubmit={handleSubmit} className="flex items-center border-t border-cyber-primary/20 pt-2">
        <ChevronRight className="text-cyber-primary mr-2 h-4 w-4" />
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-transparent flex-1 outline-none font-mono text-cyber-light caret-cyber-primary"
          placeholder="Type a command..."
          aria-label="Terminal input"
          spellCheck="false"
        />
        <span className={`h-4 w-2 bg-cyber-primary ${cursorBlink ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}></span>
      </form>
      
      <div className="mt-3 flex flex-wrap gap-2">
        {quickCommands.map((cmd) => (
          <button
            key={cmd.name}
            onClick={() => handleQuickCommand(cmd.name)}
            className="text-xs bg-cyber-dark border border-cyber-primary/30 px-2 py-1 rounded text-cyber-primary/80 hover:bg-cyber-primary/10 transition-colors flex items-center"
            title={cmd.description}
          >
            <Code className="h-3 w-3 mr-1" />
            {cmd.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default InteractiveTerminal;
