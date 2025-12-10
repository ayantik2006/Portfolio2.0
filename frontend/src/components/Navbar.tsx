import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="fixed top-[0rem] left-1/2 transform -translate-x-1/2 z-50 flex gap-12 backdrop-blur-2xl h-[5rem] w-full justify-center items-center">
      <Link
        to="/"
        className="font-semibold hover:text-[#aba7a7] cursor-pointer"
      >
        Home
      </Link>
      <Link
        to="/know-me"
        className="font-semibold hover:text-[#aba7a7] cursor-pointer"
      >
        Know Me
      </Link>
      <Link to="/projects">
        <div className="font-semibold hover:text-[#aba7a7] cursor-pointer">
          Projects
        </div>
      </Link>
      <Link to="/contact-me">
        <div className="font-semibold hover:text-[#aba7a7] cursor-pointer">
          Contact Me
        </div>
      </Link>
      <Link to="/blogs">
        <div className="font-semibold hover:text-[#aba7a7] cursor-pointer">
          Blogs
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
