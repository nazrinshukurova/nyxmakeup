import React from 'react'
import video2 from '../assets/images/2025-DPML-HPV2-Videos-Desktop-1440x800.mp4'
import Headers from './Headers'

const ThirdSection = () => {
  return (
    <div>
      <div className="w-full h-screen overflow-hidden relative z-[-1]">
      <video
        src={video2}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />
      <Headers/>
    </div>
    </div>
  )
}

export default ThirdSection
