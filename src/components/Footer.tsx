import { Github, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Manoj Singh Rawat</h3>
            <p className="text-gray-400">Full Stack Developer</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/manojCodes77" className="hover:text-blue-400 transition">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/manojsinghrawat/" className="hover:text-blue-400 transition">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Manoj Singh Rawat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}