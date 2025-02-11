import Navbar from "./Navbar"
import Home from "./Home"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import About from "./About"
import Experience from "./Experience";
import Projects from "./Projects";
import Footer from "./Footer";
import NotFound from "./NotFound";
import Contact from "./Contact"


function App() {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
     <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App