import Home from "./Components/Home.jsx";
import ImageSlider from "./Components/Imageslider.jsx";
import Footer from "./Components/Footer.jsx"
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/imageslider" element={<ImageSlider/>}/>
       <Route path="/footer" element={<Footer/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;