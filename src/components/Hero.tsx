import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="pt-32 pb-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0 relative z-10">
            <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-gradient">Manoj Singh Rawat</span>
              <br />Full Stack Developer
            </h1>
            <p className="text-xl text-gray-200 mb-8 drop-shadow-md">
              I build exceptional digital experiences that make people's lives easier.
            </p>
            <div className="flex space-x-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-cyan-500/50 flex items-center transform hover:scale-105"
              >
                View Projects
                <ArrowRight className="ml-2" size={20} />
              </a>
              <button
                onClick={() => {
                  window.open(import.meta.env.VITE_RESUME_LINK);
                }}
                className="px-6 py-3 border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all transform hover:scale-105 shadow-lg"
              >
                Resume
              </button>
            </div>
          </div>
          <div className="relative w-96 h-96 lg:w-96 lg:h-96 z-10">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-600 to-pink-600 animate-gradient blur-2xl opacity-60"></div>
            <img
              src={import.meta.env.VITE_AVATAR}
              alt="Profile"
              className="relative rounded-full w-full h-full object-cover mx-auto border-4 border-cyan-400 shadow-2xl shadow-cyan-500/50"
            />
          </div>

        </div>
      </div>
    </section>
  );
}