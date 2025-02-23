import React from "react";
import Navbar from "./components/Navbar";
import VideoContainer from "./components/VideoContainer";
import Button from "./shared/Button";
import Headers from "./components/Headers";

const App = () => {
  return (
    <div>
      <Navbar />
      <VideoContainer />
      {/* <Headers /> */}
    </div>
  );
};

export default App;
