import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import KnowMe from "./components/KnowMe";
import ContactMe from "./components/ContactMe";
import Blogs from "./components/Blogs";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero/>} />
          <Route path="/know-me" element={<KnowMe/>} />
          <Route path="/contact-me" element={<ContactMe/>} />
          <Route path="/blogs" element={<Blogs/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
