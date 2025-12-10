import { FloatingDockContactUs } from "./FloatingDockContactUs";
import Navbar from "./Navbar";
import { EncryptedText } from "./ui/encrypted-text";

function ContactMe() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle,_#000,_#0f0f10)] selection:bg-white selection:text-black flex flex-col gap-[10rem] items-center justify-center text-white scroll-smooth">
      <Navbar />
      <div className="max-w-[35rem] text-center text-[2rem] font-semibold flex flex-col gap-4 items-center">
        <img src="../../contact-us.png" alt="contact-us" className="w-[4rem] hover:rotate-[-10deg] duration-300"/>
        <EncryptedText
          text="Let's Connect and build together!!"
          encryptedClassName="text-neutral-500"
          revealedClassName="text-white"
          revealDelayMs={50}
          className="mb-[2.5rem]"
        />
        <FloatingDockContactUs/>
      </div>
    </div>
  );
}

export default ContactMe;
