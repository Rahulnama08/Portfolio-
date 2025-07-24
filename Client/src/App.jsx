import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import About from "./Components/About"
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import NotFound from "./Components/NotFound";
import Contact from "./Components/Contact"
import Achievement from "./Components/Achievement";
import lottie from "lottie-react"


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
        <Route path="/achievement" element={<Achievement/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App