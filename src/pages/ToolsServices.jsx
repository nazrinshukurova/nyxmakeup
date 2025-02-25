import React from 'react'
import Navbar from '../components/Navbar'
import ToolsSectionFirst from '../components/ToolsServices/ToolsSectionFirst'
import ToolsSectionSecond from '../components/ToolsServices/ToolsSectionSecond'
import ToolsSectionThird from '../components/ToolsServices/ToolsSectionThird'

const ToolsServices = () => {
  return (
    <div>
      <Navbar/>
      <ToolsSectionFirst/>
      <ToolsSectionSecond/>
      <ToolsSectionThird/>
    </div>
  )
}

export default ToolsServices
