// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
// import "./assets/css/style.scss";

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./components/forntend/Home";
import Login from './components/forntend/Login';
import Dashboard from './components/forntend/Dashboard';
import ContactPage from './components/forntend/ContactPage';
import testimonials from './components/forntend/CarouselTestimonials';
// import FileUpload from './components/forntend/FileUpload';
import './../src/components/style.css';
import Header from './components/forntend/Header';
import Footer from './components/forntend/Footer';


function App() {
  // const [count, setCount] = useState(0)

  return (    <>

  <BrowserRouter>
  <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/contact" element={<ContactPage/>} />
      {/* <Route path="/fileUpload" element={<FileUpload/>} /> */}      
    </Routes>
    <Footer/>
  </BrowserRouter>
    </>
  )
}

export default App
