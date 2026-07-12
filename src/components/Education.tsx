import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white drop-shadow-lg">Education</h2>
        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 border-l-2 border-cyan-500/30">
            <div className="mb-10">
              <div className="absolute -left-3 mt-2">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full p-2 shadow-lg shadow-cyan-500/50">
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="bg-gray-900/40 backdrop-blur-sm border border-cyan-500/20 p-6 rounded-lg shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/30 transition-all">
                <h3 className="text-xl font-bold mb-2 text-white">
                  Netaji Subhas University of Technology (NSUT)
                </h3>
                <p className="text-gray-300 mb-2">Bachelor of Technology - Computer Science And Engineering</p>
                <p className="text-cyan-400">2023 - 2027 · CGPA 7.80 / 10</p>
                <p className="text-gray-300 mt-2">
                  Currently in my final (4th) year, focusing on full-stack development, backend systems, and data structures & algorithms.
                </p>
              </div>
            </div>

            <div className="mb-10">
              <div className="absolute -left-3 mt-2">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full p-2 shadow-lg shadow-cyan-500/50">
                  <Award className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="bg-gray-900/40 backdrop-blur-sm border border-cyan-500/20 p-6 rounded-lg shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/30 transition-all">
                <h3 className="text-xl font-bold mb-2 text-white">Andhra Education Society School | CBSE</h3>
                <p className="text-gray-300 mb-2">Class XII</p>
                <p className="text-cyan-400">Passout in 2023</p>
                <p className="text-gray-300 mt-2">
                  Achieved 92% in CBSE class XII board examinations with excellence in Mathematics and Science subjects.
                </p>
              </div>
            </div>

            <div>
              <div className="absolute -left-3 mt-2">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full p-2 shadow-lg shadow-cyan-500/50">
                  <Award className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="bg-gray-900/40 backdrop-blur-sm border border-cyan-500/20 p-6 rounded-lg shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/30 transition-all">
                <h3 className="text-xl font-bold mb-2 text-white">Bloom Public School | CBSE</h3>
                <p className="text-gray-300 mb-2">Class X</p>
                <p className="text-cyan-400">Passout in 2021</p>
                <p className="text-gray-300 mt-2">
                  Achieved 91.2% in CBSE class X board examinations, building a strong academic foundation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;