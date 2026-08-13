import React, { useState } from "react";

const techStack :TechStackData = {
  "Web Development": [
    {
      name: "HTML",
      icon: "https://res.cloudinary.com/ddp7jlsxb/image/upload/v1786627967/html-5--v1_lr6odt.webp",
    },
    {
      name: "CSS",
      icon: "https://res.cloudinary.com/ddp7jlsxb/image/upload/v1786627965/css3_fnkqa6.webp",
    },
    {
      name: "JavaScript",
      icon: "https://res.cloudinary.com/ddp7jlsxb/image/upload/v1786627964/javascript--v1_wzywaw.webp",
    },
    {
      name: "React",
      icon: "https://res.cloudinary.com/ddp7jlsxb/image/upload/v1786627962/react-native_mtbo8k.webp",
    },
    {
      name: "NodeJs",
      icon: "https://res.cloudinary.com/ddp7jlsxb/image/upload/v1786627960/node-js-logo-png_seeklogo-269242_gg83mz.png",
    },
    {
      name: "MongoDB",
      icon: "https://res.cloudinary.com/ddp7jlsxb/image/upload/v1786627961/mongodb_cno9px.webp",
    },
    {
      name: "Mongoose",
      icon: "https://res.cloudinary.com/ddp7jlsxb/image/upload/v1786627958/mongoose_dhv1tc.webp",
    },
    {
      name: "ExpressJs",
      icon: "https://res.cloudinary.com/ddp7jlsxb/image/upload/v1786627957/express_mw1lo3.png",
    },
    {
      name:"TypeScript",
      icon:"https://res.cloudinary.com/ddp7jlsxb/image/upload/v1786627954/typescript_arls6r.png"
    },
    {
      name: "Rest API",
      icon: "https://res.cloudinary.com/ddp7jlsxb/image/upload/v1786627956/api-settings_bf93rx.webp",
    },
    {
      name: "SQL",
      icon: "https://res.cloudinary.com/ddp7jlsxb/image/upload/v1786627953/sql_wwurqc.webp",
    },
    {
      name:"MySQL",
      icon:"https://res.cloudinary.com/ddp7jlsxb/image/upload/v1786627951/mysql_jzfvew.png"
    },
    {
      name:"PostgreSQL",
      icon:"https://res.cloudinary.com/ddp7jlsxb/image/upload/v1786627950/postgres_knht6w.png"
    },
    {
      name:"Prisma",
      icon:"https://res.cloudinary.com/ddp7jlsxb/image/upload/v1783851256/prisma_ap8prx.png"
    },
    {
      name :"Hono",
      icon:"https://res.cloudinary.com/ddp7jlsxb/image/upload/v1742211419/nextjs-uploads/sfy1jzmcm10lo1dv99ea.png"
    },
    
    {
      name:"Redux",
      icon:"https://res.cloudinary.com/ddp7jlsxb/image/upload/v1783851325/redux_yrtqfx.jpg"
    },
    {
      name:"NextJs",
      icon:"https://res.cloudinary.com/ddp7jlsxb/image/upload/v1742211699/nextjs-uploads/esymsxllhavtlpc7swmt.png"
    },
    {
      name:"Tailwind CSS",
      icon:"https://res.cloudinary.com/ddp7jlsxb/image/upload/v1786627949/tailwind_uuwjwn.png"
    },
    {
      name:"Python",
      icon:"https://res.cloudinary.com/ddp7jlsxb/image/upload/v1786627947/python_zob5xz.webp"
    },
    {
      name:"Django",
      icon:"https://res.cloudinary.com/ddp7jlsxb/image/upload/v1742211819/nextjs-uploads/fyyoathilrs6vdfsmqib.png"
    },
    {
      name: "FastAPI",
      icon: "https://res.cloudinary.com/ddp7jlsxb/image/upload/v1786627946/fastapi_stolul.svg"
    },
    {
      name: "Redis",
      icon: "https://res.cloudinary.com/ddp7jlsxb/image/upload/v1786627943/redis_fzi72n.webp"
    },
    {
      name: "SQLAlchemy",
      icon: "https://res.cloudinary.com/ddp7jlsxb/image/upload/v1786627944/sqlalchemy_wyszwq.svg"
    }
  ],
  Others: [
    {
      name:"Xampp",
      icon:"https://res.cloudinary.com/ddp7jlsxb/image/upload/v1786627942/xampp-logo-ac950edf_oaogqj.svg"
    },
    {
      name: "Git",
      icon: "https://res.cloudinary.com/ddp7jlsxb/image/upload/v1786627940/git_yvs6jp.webp",
    },

    {
      name: "GitHub",
      icon: "https://res.cloudinary.com/ddp7jlsxb/image/upload/v1786627939/github_eitxkz.png",
    },
    {
      name: "VS Code",
      icon: "https://res.cloudinary.com/ddp7jlsxb/image/upload/v1786627937/visual-studio-code-2019_imatt3.webp",
    },
    {
      name: "Postman",
      icon: "https://res.cloudinary.com/ddp7jlsxb/image/upload/v1786627936/postman_e3wkwb.png",
    },
    {
      name: "Excel",
      icon: "https://res.cloudinary.com/ddp7jlsxb/image/upload/v1786627935/microsoft-excel-2019_xq3rfp.webp",
    },
    {
        name:"ChatGPT",
        icon:"https://res.cloudinary.com/ddp7jlsxb/image/upload/v1786627930/chatgpt_a46mjy.png"
    },
    {
      name:"Cloudflare",
      icon:"https://res.cloudinary.com/ddp7jlsxb/image/upload/v1786627933/Cloudflare_Logo_wtdrpi.png"
    },
    {
      name: "Docker",
      icon: "https://res.cloudinary.com/ddp7jlsxb/image/upload/v1786627932/docker_ey1par.webp"
    },
    {
      name: "AWS",
      icon: "https://res.cloudinary.com/ddp7jlsxb/image/upload/v1786627928/amazon-web-services-aws-logo-png_seeklogo-319188_hgbvnt.png"
    },
    {
      name: "Gemini API",
      icon: "https://res.cloudinary.com/ddp7jlsxb/image/upload/v1786627929/gemini-ai_xfg4rd.webp"
    }
  ],
};


type Tech = {
  name: string;
  icon: string;
};

type TechStackData = {
  [category: string]: Tech[];
};


export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Web Development");

  return (
    <section className="py-16 px-6 lg:px-24 relative z-10" id="skills">
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-white drop-shadow-lg">
          Tech Stack
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {Object.keys(techStack).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full text-sm lg:text-base font-semibold transition-all duration-300 shadow-lg focus:outline-none ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white scale-105 shadow-cyan-500/50"
                  : "bg-gray-800/40 backdrop-blur-sm text-gray-200 border border-cyan-500/20 hover:bg-cyan-500/20 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="lg:w-3/4 2xl:w-3/5 mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8">
        {techStack[selectedCategory]?.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center space-y-4 p-4 bg-gray-900/40 backdrop-blur-sm border border-cyan-500/20 rounded-xl shadow-lg shadow-cyan-500/10 transform transition-all duration-300 hover:scale-110 hover:shadow-cyan-500/30 hover:border-cyan-500/50"
          >
            <div className="bg-gray-800/50 rounded-full p-6 object-cover">
              <img src={tech.icon} alt={tech.name} className="w-12 h-12" />
            </div>
            <p className="text-center text-base font-medium text-gray-200">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
