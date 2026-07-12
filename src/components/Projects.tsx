import { FaGithub } from 'react-icons/fa';
import { GrDeploy } from "react-icons/gr";
const projects = [
  {
    title: 'BharatConnect — Professional Networking Platform',
    description:
      'A LinkedIn-inspired professional networking platform powered by 20+ REST APIs. Supports image & video uploads via Cloudinary (up to 5 media per post), a secure TypeScript backend with JWT auth, bcryptjs, and role-based access control, and a responsive Redux Toolkit frontend with real-time likes, comments, and shares.',
    image: 'https://res.cloudinary.com/ddp7jlsxb/image/upload/v1783851778/bharat-connect_rfon7q.png',
    tags: ['React', 'Redux Toolkit', 'Nodejs', 'Express', 'MongoDB', 'TypeScript', 'Tailwind', 'Cloudinary'],
    github: 'https://github.com/manojCodes77/BharatConnect-Frontend.git',
    demo: 'https://bharat-connect-frontend.vercel.app'
  },
  {
    title: 'LEKHAK — Online Blogging Application',
    description:
      'A full-stack blogging platform where authenticated users create, read, update, and delete posts. High-performance REST APIs on Hono.js + Cloudflare Workers handle 50+ concurrent requests against PostgreSQL via Prisma ORM, with Prisma Accelerate and Resend powering email verification and notifications.',
    image: 'https://miro.medium.com/v2/resize:fit:1400/1*chp04IYdcgjttZWyseXOqQ.png',
    tags: ['Hono.js', 'Cloudflare Workers', 'PostgreSQL', 'Prisma', 'React', 'Tailwind', 'Resend'],
    github: 'https://github.com/manojCodes77/Online-Blogging-Application',
    demo: 'https://online-blogging-application.vercel.app/'
  }
];


export const Projects = () => {
  return (
    <div className="py-16 px-4 sm:px-6 mt-20 mb-20 lg:px-24 relative z-10" id="projects">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-14 text-white drop-shadow-lg">
        Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900/40 backdrop-blur-sm border border-cyan-500/20 rounded-xl overflow-hidden p-2 relative group cursor-pointer hover:shadow-2xl hover:shadow-cyan-500/30 transition-all hover:scale-105"
          >
            <div className="relative">
              {/* Image section with hover effect */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 sm:h-52 rounded-md mb-4 object-cover"
              />
              {/* Slider overlay from the left, only shows on hover */}
              <div className="absolute inset-0 rounded-xl bg-gray-700 bg-opacity-0 group-hover:bg-opacity-50 left-[-100%] group-hover:left-0 transition-all duration-500 flex items-center justify-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                >
                  <FaGithub />
                </a>
                <a 
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                >
                  <GrDeploy />
                </a>
              </div>
            </div>
            <h2 className="text-lg sm:text-xl font-semibold mb-2 mt-4 text-center md:text-left text-white">
              {project.title}
            </h2>
            <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full border border-cyan-500/30"
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

