import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import KnowMe from "./components/KnowMe";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero/>} />
          <Route path="/know-me" element={<KnowMe/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
