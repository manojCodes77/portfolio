import { Menu, Github, Linkedin } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed w-full bg-gray-900/20 backdrop-blur-lg z-50 border-b border-cyan-500/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-xl font-bold text-white">
            Manoj
          </a>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-200 hover:text-cyan-400 transition-colors">About</a>
            <a href="#projects" className="text-gray-200 hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#skills" className="text-gray-200 hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#contact" className="text-gray-200 hover:text-cyan-400 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/manojCodes77" className="text-gray-200 hover:text-cyan-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/manojsinghrawat/" className="text-gray-200 hover:text-cyan-400 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>

          <button className="md:hidden text-white">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}