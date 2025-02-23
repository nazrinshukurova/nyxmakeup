import React from "react";
import video from "../assets/images/2025-FOLD-CHILLZ-EXT-HPV2-Video-Desktop-1440x800-V2.mp4";

const VideoContainer = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <video
        src={video}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};

export default VideoContainer;
