import { Github, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-950/40 backdrop-blur-sm border-t border-cyan-500/20 text-white py-12 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-2 text-white">Manoj Singh Rawat</h3>
            <p className="text-gray-300">Full Stack Developer</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/manojCodes77" className="hover:text-cyan-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/manojsinghrawat/" className="hover:text-cyan-400 transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-cyan-500/20 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Manoj Singh Rawat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}