import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonial from "./Components/Testimonial/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle={"Our PROGRAM"} title={"What We Offer"} />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subtitle={"Gallery"} title={"Campus Photos"} />
        <Campus />
        <Title subtitle={"TESTIMONIALS"} title={"What Student Says"} />
        <Testimonial />
        <Title subtitle={"CONTACT US"} title={"get in touch"} />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
