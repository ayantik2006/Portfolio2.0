import { FloatingDockContactUs } from "./FloatingDockContactUs";
import Navbar from "./Navbar";
import { EncryptedText } from "./ui/encrypted-text";
import { TypewriterEffect } from "./ui/typewriter-effect";

function ContactMe() {
  const words = [
    {
      text: "Let's",
      className:"text-white"
    },
    {
      text: "Connect",
      className:"text-blue-300"
    },
    {
      text: "and",
      className:"text-white"
    },
    {
      text: "Build",
      className:"text-red-300"
    },
    {
      text: "together",
      className:"text-white"
    },
    
  ];
  return (
    <div className="min-h-screen bg-[radial-gradient(circle,_#000,_#0f0f10)] selection:bg-white selection:text-black flex flex-col gap-[10rem] items-center justify-center text-white scroll-smooth">
      <Navbar />
      <div className="max-w-[35rem] text-center text-[2rem] font-semibold flex flex-col gap-4 items-center mx-10">
        <img
          src="../../contact-us.png"
          alt="contact-us"
          className="w-[4rem] hover:rotate-[-10deg] duration-300"
        />
        <TypewriterEffect words={words} className="mb-[2rem]"/>
        <FloatingDockContactUs />
      </div>
    </div>
  );
}

export default ContactMe;
