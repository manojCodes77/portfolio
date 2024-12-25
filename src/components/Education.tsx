import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 border-l-2 border-indigo-200">
            <div className="mb-10">
              <div className="absolute -left-3 mt-2">
                <div className="bg-blue-600 rounded-full p-2">
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">
                  Netaji Subhas University of Technology (NSUT)
                </h3>
                <p className="text-gray-600 mb-2">Bachelor of Technology - Computer Science And Engineering</p>
                <p className="text-gray-500">2023 - Present</p>
                <p className="text-gray-600 mt-2">
                  Currently in second year, focusing on computer science fundamentals and advanced programming concepts.
                </p>
              </div>
            </div>

            <div>
              <div className="absolute -left-3 mt-2">
                <div className="bg-blue-600 rounded-full p-2">
                  <Award className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Andhra Education Society School|CBSE</h3>
                <p className="text-gray-600 mb-2">Class XII</p>
                <p className="text-gray-500">Passout in 2023</p>
                <p className="text-gray-600 mt-2">
                  Achieved 92% in CBSE class XII board examinations with excellence in Mathematics and Science subjects.
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