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
  },
  {
    title:"Notes Making Application", 
    description:"A simple notes making application which contains CRUD operations plus Authentication and Authorization using Django.",
    image:"data:image/jpeg;base64,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",
    tags: ['Django', 'Python','Reactjs', 'Tailwind', 'PostgreSql'],
    github:"https://github.com/manojCodes77/02-notes-making-app-using-django",
    demo:"https://notes-making-app-frontend.vercel.app/"
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

