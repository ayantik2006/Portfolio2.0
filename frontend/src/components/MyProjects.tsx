import { Github } from "lucide-react";
import Navbar from "./Navbar";
import { WobbleCard } from "./ui/wobble-card";

function MyProjects() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle,_#000,_#0f0f10)] selection:bg-white selection:text-black flex flex-col gap-[10rem] items-center justify-center text-white scroll-smooth">
      <Navbar />

      <div className="flex flex-col gap-4 max-w-[30rem] mt-[10rem] mb-[10rem]">
        <a
          href="https://codehive-gths.onrender.com/"
          target="_blank"
          className="flex flex-col animate-pulse"
        >
          <WobbleCard className="p-[2rem] bg-[#171717] hover:bg-[#171717] flex flex-col items-start">
            <img
              src="../../codehive.png"
              alt="codehive"
              className="w-[20rem] rounded-[0.5rem] self-center"
            />
            <h1 className="text-[1.2rem] font-semibold ml-[0.1rem] mt-2">
              CodeHive
            </h1>
            <div className="ml-[0.1rem] text-[0.8rem] bg-[#2E191A] px-2 py-1 flex items-center gap-1 rounded-[0.4rem] mt-1">
              <div className="bg-red-700 rounded-full w-2 h-2 animate-pulse"></div>
              Building
            </div>
            <p className="text-[1rem] text-[#c0c0c0] mt-3">
              A real-time collaborative code editor designed to make coding,
              sharing, and learning smoother for developers.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <div className="bg-[#2F2F2F] px-3 border-dashed border-1 rounded-[0.3rem] flex items-center gap-1">
                <i className="devicon-react-original colored"></i>
                <p className="text-[0.9rem]">ReactJS</p>
              </div>
              <div className="bg-[#2F2F2F] px-3 border-dashed border-1 rounded-[0.3rem] flex items-center gap-1">
                <img
                  src="https://ui.shadcn.com/apple-touch-icon.png"
                  alt="shadcn"
                  className="w-[1rem] rounded-[0.3rem]"
                />
                <p className="text-[0.9rem]">ShadCN</p>
              </div>
              <div className="bg-[#2F2F2F] px-3 border-dashed border-1 rounded-[0.3rem] flex items-center gap-1">
                <i className="devicon-express-original"></i>

                <p className="text-[0.9rem]">ExpressJS</p>
              </div>
              <div className="bg-[#2F2F2F] px-3 border-dashed border-1 rounded-[0.3rem] flex items-center gap-1">
                <i className="devicon-mongodb-plain colored"></i>
                <p className="text-[0.9rem]">MongoDB</p>
              </div>
            </div>
            <a href="https://github.com/ayantik2006/CodeHive" target="_blank" className="z-50">
              <div className="mt-5 flex text-[0.9rem] items-center gap-1 text-gray-100 bg-[#434343] px-2 py-1 rounded-[0.4rem]">
                <Github size={16} />
                GitHub
              </div>
            </a>
          </WobbleCard>
        </a>

        <a
          href="https://nitrconfessions.fun/"
          target="_blank"
          className="flex flex-col animate-pulse"
        >
          <WobbleCard className="p-[2rem] bg-[#171717] hover:bg-[#171717] flex flex-col items-start">
            <img
              src="../../confessions.png"
              alt="codehive"
              className="w-[20rem] rounded-[0.5rem] self-center"
            />
            <h1 className="text-[1.2rem] font-semibold ml-[0.1rem] mt-2">
              NITR Confessions
            </h1>
            <div className="ml-[0.1rem] text-[0.8rem] bg-[#15291D] px-2 py-1 flex items-center gap-1 rounded-[0.4rem] mt-1">
              <div className="bg-[#03B248] rounded-full w-2 h-2 animate-pulse"></div>
              Live
            </div>
            <p className="text-[1rem] text-[#c0c0c0] mt-3">
              A real-time collaborative code editor designed to make coding,
              sharing, and learning smoother for developers.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <div className="bg-[#2F2F2F] px-3 border-dashed border-1 rounded-[0.3rem] flex items-center gap-1">
                <i className="devicon-react-original colored"></i>
                <p className="text-[0.9rem]">ReactJS</p>
              </div>
              <div className="bg-[#2F2F2F] px-3 border-dashed border-1 rounded-[0.3rem] flex items-center gap-1">
                <i className="devicon-express-original"></i>

                <p className="text-[0.9rem]">ExpressJS</p>
              </div>
              <div className="bg-[#2F2F2F] px-3 border-dashed border-1 rounded-[0.3rem] flex items-center gap-1">
                <i className="devicon-mongodb-plain colored"></i>
                <p className="text-[0.9rem]">MongoDB</p>
              </div>
            </div>
            <a href="https://github.com/ayantik2006/NITR-Confessions" target="_blank" className="z-50">
              <div className="mt-5 flex text-[0.9rem] items-center gap-1 text-gray-100 bg-[#434343] px-2 py-1 rounded-[0.4rem]">
                <Github size={16} />
                GitHub
              </div>
            </a>
          </WobbleCard>
        </a>
      </div>
    </div>
  );
}

export default MyProjects;
