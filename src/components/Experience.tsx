import { Briefcase } from 'lucide-react';

const highlights = [
  'Built production-grade RESTful KYC / identity-verification APIs with FastAPI, SQLAlchemy, Pydantic, Alembic, and MySQL, enabling secure customer onboarding.',
  'Designed three categories of verification APIs: synchronous, asynchronous request-response (polling via requestId), and multi-step customer-journey workflows such as DigiLocker.',
  'Led development of a sandbox environment replicating 50+ production APIs, letting clients integrate and test safely without affecting live services.',
  'Containerized backend services with Docker and deployed on AWS EC2 with Amazon RDS (MySQL), configuring Nginx as a reverse proxy and shipping via automated CI/CD pipelines.',
];

const stack = ['FastAPI', 'SQLAlchemy', 'MySQL', 'Docker', 'AWS', 'Nginx', 'Alembic'];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white drop-shadow-lg">Experience</h2>
        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 border-l-2 border-cyan-500/30">
            <div>
              <div className="absolute -left-3 mt-2">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full p-2 shadow-lg shadow-cyan-500/50">
                  <Briefcase className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="bg-gray-900/40 backdrop-blur-sm border border-cyan-500/20 p-6 rounded-lg shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/30 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">Deepvue Technologies Pvt. Ltd.</h3>
                  <p className="text-cyan-400 text-sm sm:text-base">May 2026 – July 2026</p>
                </div>
                <p className="text-gray-300 mb-4">Full Stack Engineer Intern · Remote</p>

                <ul className="space-y-2 mb-5">
                  {highlights.map((point, i) => (
                    <li key={i} className="flex text-gray-300 text-sm sm:text-base">
                      <span className="text-cyan-400 mr-2 mt-1">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {stack.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full border border-cyan-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
