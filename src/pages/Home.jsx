import React from "react";
import VideoContainer from "../components/VideoContainer";
import SecondSection from "../components/SecondSection";
import ThirdSection from "../components/ThirdSection";
import Navbar from "../components/Navbar";
const Home = () => {
  return (
    <div>
      <Navbar />
      <VideoContainer />
      <SecondSection />
      <ThirdSection />
    </div>
  );
};

export default Home;
