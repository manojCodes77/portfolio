import React from "react";

const Education = () => {
  return (
    <section id="education" className="py-12 mt-24 mb-32">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-medium text-center mb-12">Education</h2>
        <div className="relative">
          {/* Timeline Vertical Line */}
        

          {/* Timeline Item 1 (Left Side) */}
          <div className="mb-8 flex flex-col sm:flex-row items-center w-full">
            <div className="bg-gray-50 p-6 rounded-md shadow-lg w-full sm:w-5/12">
              <h3 className="font-bold text-lg">
              Netaji Subhas University of Technology (NSUT)
              </h3>
              <p className="text-sm text-gray-500">B Tech | 2023 - 2027</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                • Pursuing Bachelor's of Technology in Computer Science And Engineering.
              </p>
            </div>

           
          </div>

          {/* Timeline Item 2 (Right Side) */}
          <div className="mb-8 flex flex-col sm:flex-row items-center w-full justify-end">
            {/* SVG Icon */}
           

            <div className="bg-gray-50 p-6 rounded-md shadow-lg w-full sm:w-5/12">
              <h3 className="font-bold text-lg">Central Board of Secondary Education (CBSE)</h3>
              <p className="text-sm text-gray-500">Science | 2021 - 2023</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                • Class 10th: 91.2 % <br />• Class 12th: 81 %
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
