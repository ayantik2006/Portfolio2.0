import Navbar from "./Navbar";
import ColourfulText from "./ui/colourful-text";

function Blog() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle,_#000,_#0f0f10)] selection:bg-white selection:text-black flex flex-col gap-[10rem] items-center justify-center text-white scroll-smooth">
      <Navbar />
      <div className="font-extrabold text-[2rem]">
        <ColourfulText text="Coming soon..." />
      </div>
    </div>
  );
}

export default Blog;
