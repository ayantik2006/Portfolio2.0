import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div className="fixed mt-[-38rem] flex gap-8">
        <Link to="/know-me" className="font-semibold hover:text-[#aba7a7] cursor-pointer">Know Me</Link>
        <div className="font-semibold hover:text-[#aba7a7] cursor-pointer">My Projects</div>
        <div className="font-semibold hover:text-[#aba7a7] cursor-pointer">Contact Me</div>
        <div className="font-semibold hover:text-[#aba7a7] cursor-pointer">Blogs</div>
    </div>
  )
}

export default Navbar