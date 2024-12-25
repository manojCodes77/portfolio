import { FaGithub } from 'react-icons/fa';
const projects = [
  {
    title: 'Online Blogging Application', 
    description: 'A full-stack blogging platform built with React, Node.js, and PostgreSQL, using Prisma for ORM and styled with Tailwind CSS.',
    image: 'https://miro.medium.com/v2/resize:fit:1400/1*chp04IYdcgjttZWyseXOqQ.png',
    tags: [ "Postgres","Prisma",'React', 'Nodejs', 'Tailwind'],
    github: 'https://github.com/manojCodes77/Online-Blogging-Application',
    demo: 'https://demo.com'
  },
  {
    title: 'Myntra Clone',
    description: 'A full-stack e-commerce platform mimicking Myntra’s UI and functionality, built with React, Node.js, and styled with Tailwind CSS.',
    image: 'https://repository-images.githubusercontent.com/540342974/fd1ce63c-54d6-4082-ad20-c1439973e7b1',
    tags: ['React', 'Nodejs', 'Tailwind'],
    github: 'https://github.com/manojCodes77/myntra-clone',
    demo: 'https://demo.com'
  },
  {
    title: 'Voting App',
    description: 'A collaborative voting application built with Node.js and MongoDB for storing votes, featuring real-time updates.',
    image: 'https://media.istockphoto.com/id/1257379398/vector/freedom-of-choice-concept-people-vote-pros-and-cons-online-voting-concept-electronic-voting.jpg?s=612x612&w=0&k=20&c=h1jIYSPpZVb2YlzrnGUS7x81AJgyLayiqlmv8-WPE90=',
    tags: ['Nodejs', 'Mongodb', 'Mongoose'],
    github: 'https://github.com/manojCodes77/voting-app',
    demo: 'https://demo.com'
  },
  {
    title: 'Amazon Clone',
    description: 'A modern e-commerce site replicating Amazon’s homepage, developed using HTML, CSS, and JavaScript.',
    image: 'https://media.designrush.com/inspiration_images/136768/conversions/_1524503075_233_Amazon-Website-Design-Homepage-desktop.jpg',
    tags: ['HTML', 'CSS', 'Javascript'],
    github: 'https://github.com/manojCodes77/amazon-project',
    demo: 'https://demo.com'
  }
];


export const Projects = () => {
  return (
    <div className="py-16 px-4 sm:px-6 mt-20 mb-20 lg:px-24" id="projects">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-center mb-14">
        Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl overflow-hidden p-2 relative group cursor-pointer hover:shadow-lg transition-shadow"
          >
            <div className="relative">
              {/* Image section with hover effect */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 sm:h-52 rounded-md mb-4 object-cover"
              />
              {/* Slider overlay from the left, only shows on hover */}
              <div className="absolute inset-0 rounded-xl bg-gray-700 bg-opacity-0 group-hover:bg-opacity-50 left-[-100%] group-hover:left-0 transition-all duration-500 flex items-center justify-center">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
            <h2 className="text-lg sm:text-xl font-semibold mb-2 mt-4 text-center md:text-left">
              {project.title}
            </h2>
            <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-gray-100 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

