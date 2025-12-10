import { motion } from "framer-motion";
import Navbar from "./Navbar";
import {Code, NotebookPen, Target, University} from "lucide-react";

function KnowMe() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle,_#000,_#0f0f10)] selection:bg-white selection:text-black flex flex-col gap-[10rem] items-center text-white bg-amber-300 scroll-smooth">
      <Navbar />
      <motion.div
        className="flex flex-col items-center gap-2 max-w-[35rem] mt-[12rem]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h1 className="text-[2rem] text-[#cdcdcd] flex items-center gap-2"><Code size={32} className="mt-[0.1rem]"/>Technical Skills</h1>
        <div className="flex flex-wrap gap-4 mt-[2rem] font-semibold justify-center">
          <div className="bg-[#2F2F2F] px-4 py-1 rounded-[0.7rem] border-1 gap-1 border-dashed hover:-translate-y-1 duration-300">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              className="flex items-center gap-1"
            >
              <i className="devicon-html5-plain colored"></i>HTML5
            </a>
          </div>
          <div className="bg-[#2F2F2F] px-4 py-1 rounded-[0.7rem] border-1 gap-1 border-dashed hover:-translate-y-1 duration-300">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              className="flex items-center gap-1"
            >
              <i className="devicon-css3-plain colored"></i>CSS
            </a>
          </div>
          <div className="bg-[#2F2F2F] px-4 py-1 rounded-[0.7rem] border-1 gap-1 border-dashed hover:-translate-y-1 duration-300">
            <a
              href="https://tailwindcss.com/"
              className="flex items-center gap-1"
            >
              <i className="devicon-tailwindcss-original colored"></i>Tailwind
              CSS
            </a>
          </div>
          <div className="bg-[#2F2F2F] px-4 py-1 rounded-[0.7rem] border-1 gap-1 border-dashed hover:-translate-y-1 duration-300">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              className="flex items-center gap-1"
            >
              <i className="devicon-javascript-plain colored"></i>JavaScript
            </a>
          </div>
          <div className="bg-[#2F2F2F] px-4 py-1 rounded-[0.7rem] border-1 gap-1 border-dashed hover:-translate-y-1 duration-300">
            <a href="https://react.dev/" className="flex items-center gap-1">
              <i className="devicon-react-original colored"></i>React
            </a>
          </div>
          <div className="bg-[#2F2F2F] px-4 py-1 rounded-[0.7rem] border-1 gap-1 border-dashed hover:-translate-y-1 duration-300">
            <a href="https://nodejs.org/" className="flex items-center gap-1">
              <i className="devicon-nodejs-plain colored"></i>NodeJS
            </a>
          </div>
          <div className="bg-[#2F2F2F] px-4 py-1 rounded-[0.7rem] border-1 gap-1 border-dashed hover:-translate-y-1 duration-300">
            <a
              href="https://expressjs.com/"
              className="flex items-center gap-1"
            >
              <i className="devicon-express-original"></i>ExpressJS
            </a>
          </div>
          <div className="bg-[#2F2F2F] px-4 py-1 rounded-[0.7rem] border-1 gap-1 border-dashed hover:-translate-y-1 duration-300">
            <a
              href="https://www.mongodb.com/"
              className="flex items-center gap-1"
            >
              <i className="devicon-mongodb-plain colored"></i>MongoDB
            </a>
          </div>
          <div className="bg-[#2F2F2F] px-4 py-1 rounded-[0.7rem] border-1 gap-1 border-dashed hover:-translate-y-1 duration-300">
            <a
              href="https://mongoosejs.com/"
              className="flex items-center gap-1"
            >
              <i className="devicon-mongoose-original colored"></i>Mongoose
            </a>
          </div>
          <div className="bg-[#2F2F2F] px-4 py-1 rounded-[0.7rem] border-1 gap-1 border-dashed hover:-translate-y-1 duration-300">
            <a href="https://git-scm.com/" className="flex items-center gap-1">
              <i className="devicon-git-plain colored"></i>Git
            </a>
          </div>
          <div className="bg-[#2F2F2F] px-4 py-1 rounded-[0.7rem] border-1 gap-1 border-dashed hover:-translate-y-1 duration-300">
            <a href="https://github.com/" className="flex items-center gap-1">
              <i className="devicon-github-original"></i>GitHub
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="mt-[rem] flex flex-col items-center gap-6 max-w-[35rem]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h1 className="text-[2rem] text-[#e0dddd] flex items-center gap-2"><NotebookPen size={32}/>My Approach</h1>
        <p className="text-[#abaaaa] text-center text-[1.1rem]">
          I believe in clean code, continuous learning, and building tools that
          make life easier for others.
        </p>
      </motion.div>

      <motion.div
        className="mt-[rem] flex flex-col items-center gap-2 max-w-[35rem]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h1 className="text-[2rem] text-[#e0dddd] flex items-center gap-2"><Target size={32}/>My Goals</h1>
        <p className="text-[#abaaaa] text-center text-[1.1rem]">
          Currently, I'm focused on building impactful projects and preparing to
          join top tech companies where I can grow and innovate.
        </p>
      </motion.div>

      <motion.div
        className="mt-[rem] flex flex-col items-center gap-2 max-w-[35rem] pb-[10rem]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h1 className="text-[2rem] text-[#e0dddd] flex items-center gap-2"><University size={32}/>Educational Status</h1>
        <p className="text-[#abaaaa] text-[1.1rem] text-center">
          I am currently a 1st year undergraduate student at <br />{" "}
          <a
            href="https://www.nitrkl.ac.in/"
            className="text-[#f00808] hover:translate-y-1"
            target="_blank"
          >
            National Institute of Technology, Rourkela
          </a>
        </p>
      </motion.div>
      {/* 
      <div className="mb-5 border-2 px-6 py-4 border-dashed rounded-[1rem] max-w-[35rem] text-[#a7a6a6] border-[#a7a6a6] shadow-[4px_4px_5px_3px] italic">
        “Any fool can write code a computer understands. Good developers write
        code humans understand.” <br />— Martin Fowler
      </div> */}
    </div>
  );
}

export default KnowMe;
