import { BrowserRouter, Routes, Route } from "react-router-dom"


import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Service from "./pages/service/Service"
import Blog from "./pages/blog/Blog"
import Pricing from "./pages/pricing/Pricing"
import Contact from "./pages/contact/Contact"
import Footer from "./components/Footer"


import Navbar from "./components/Navbar"
import "./index.css"



const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="services" element={<Service/>}/>
        <Route path="blog" element={<Blog/>}/>
        <Route path="pricing" element={<Pricing/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App