import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-blue-600">Manoj Singh Rawat</span>
              <br />Full Stack Developer
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              I build exceptional digital experiences that make people's lives easier.
            </p>
            <div className="flex space-x-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center"
              >
                View Projects
                <ArrowRight className="ml-2" size={20} />
              </a>
              <button
                onClick={() => {
                  window.open(import.meta.env.VITE_RESUME_LINK);
                }}
                className="px-6 py-3 border border-gray-300 rounded-lg hover:border-gray-400 transition"
              >
                Resume
              </button>
            </div>
          </div>
          <div className="relative w-96 h-96 lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 via-red-600 to-rose-800 animate-gradient bg-opacity-50 blur-lg"></div>
            <img
              src="https://avatars.githubusercontent.com/u/147693594?v=4"
              alt="Profile"
              className="relative rounded-full w-full h-full object-cover mx-auto border-4 border-white shadow-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
}