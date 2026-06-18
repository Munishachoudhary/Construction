import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx"
import Gallery from "./Components/Gallery.jsx"
import Services from "./Components/Services.jsx"
import Contact from "./Components/Contact.jsx"
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/services" element={<Services/>}/>
       <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;