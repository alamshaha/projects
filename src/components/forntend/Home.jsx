import React from "react";
import "../../App.css";

import { AiFillAccountBook } from "react-icons/ai";

// Pages Start From Here
import Header from "./Header";
import Footer from "./Footer";
import Carousel from "./Carousel";
import Services from "./Services";
import ContactPage from "./ContactPage";
import CarouselTestimonials from "./CarouselTestimonials";


const Home = () => {
  return (
    <home>
      <div className="row">    
        <Carousel />
        <div className="container">
          <h3 className="text-center text-info1 alert">SERVICES SECTION</h3>
          {/* <AiFillAccountBook /> */}
        </div>
        <Services/>
      </div>
      <CarouselTestimonials />
      <ContactPage />    
    </home>
  );
};

export default Home;
