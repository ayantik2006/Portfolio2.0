import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LayoutTextFlip } from "./ui/layout-text-flip";
import ColourfulText from "./ui/colourful-text";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Hero() {
  const [isTaglineShowing, setIsTaglineShowing] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsTaglineShowing(true);
    }, 1000);
  }, []);
  return (
    <div className="min-h-screen text-[#e4e2e2] flex flex-col items-center justify-center gap-[4rem] bg-[radial-gradient(circle,_#000,_#0f0f10)] selection:bg-white selection:text-black scroll-smooth ">
      <Navbar/>
      <div className="flex flex-col items-center gap-2 h-fit w-fit ">
        <img
          src="https://api.dicebear.com/9.x/personas/svg?seed=Robert"
          alt="avatar"
          className="w-[5rem] bg-yellow-400 rounded-full border-3 hover:rotate-[360deg] duration-300"
        />
        <div className="font-semibold text-[#c1c0c0] text-[2rem] flex">
          <p>Hi, I am</p>&nbsp;
          <div className="font-extrabold">
            <ColourfulText text="Ayantik"/>
          </div>
        </div>
        <motion.div className="relative mx-4 my-4 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row font-normal text-[1rem] ">
          <LayoutTextFlip
            text="I build "
            words={["Scalable", "Efficient", "Reliable"]}
            duration={1000}
          />
          <p className="text-2xl font-bold tracking-tight drop-shadow-lg md:text-4xl">
            web apps
          </p>
        </motion.div>
        <div className="flex gap-6 mt-6">
          <Link to="/projects">
            <button className="bg-white text-black px-4 py-2 rounded-[2rem] font-bold hover:-translate-y-1 duration-300">
              See Projects
            </button>
          </Link>

          <a
            href="https://drive.google.com/file/d/1zHZ_aWmQiwHtACBoZm1O5BVZiIY7g4-D/view?usp=sharing"
            target="_blank"
          >
            <button className="bg-transparent text-white border-2 px-4 py-2 rounded-[2rem] font-bold hover:-translate-y-1 duration-300">
              Get Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
