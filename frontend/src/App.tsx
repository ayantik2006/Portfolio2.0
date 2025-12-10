import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import KnowMe from "./components/KnowMe";
import ContactMe from "./components/ContactMe";
import Blogs from "./components/Blogs";
import MyProjects from "./components/MyProjects";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero/>} />
          <Route path="/know-me" element={<KnowMe/>} />
          <Route path="/contact-me" element={<ContactMe/>} />
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/projects" element={<MyProjects/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
