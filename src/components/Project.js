import React from "react";
import { FaGithub } from "react-icons/fa"; // Importing GitHub icon from react-icons

const projects = [
  {
    title: "Online Food Ordering App",
    image: "https://user-images.githubusercontent.com/28086341/102119032-855d4280-3e66-11eb-8070-59a73b68a918.png",
    techStack: "React, ExpressJs, MySQL",
    githubLink: "https://github.com/BharatKeCoders/Online_food_ordering_app",
  },
  {
    title: "myntra-clone",
    image: "https://repository-images.githubusercontent.com/540342974/fd1ce63c-54d6-4082-ad20-c1439973e7b1",
    techStack: "React, Redux, NodeJs , FileSystem",
    githubLink: "https://github.com/manojCodes77/myntra-clone",
  },
  {
    title: "Voting-App",
    image:
      "https://media.istockphoto.com/id/1257379398/vector/freedom-of-choice-concept-people-vote-pros-and-cons-online-voting-concept-electronic-voting.jpg?s=612x612&w=0&k=20&c=h1jIYSPpZVb2YlzrnGUS7x81AJgyLayiqlmv8-WPE90=",
    techStack: "ExpressJs, MongoDB",
    githubLink: "https://github.com/manojCodes77/voting-app",
  },
  {
    title: "Amazon Clone",
    image: "https://media.designrush.com/inspiration_images/136768/conversions/_1524503075_233_Amazon-Website-Design-Homepage-desktop.jpg",
    techStack: "HTML, CSS, JavaScript",
    githubLink: "https://github.com/manojCodes77/amazon-project?tab=readme-ov-file",
  },
];

const Project = () => {
  return (
    <div className="py-16 px-4 sm:px-6 mt-20 mb-24 lg:px-24" id="projects">
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
                  href={project.githubLink}
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
            <p className="text-gray-500 text-sm sm:text-base text-center md:text-left">
              Tech Stack: {project.techStack}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
