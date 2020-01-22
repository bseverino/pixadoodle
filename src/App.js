import React, { useState } from 'react'

import Canvas from './components/canvas/Canvas'
import Palette from './components/palette/Palette'
import Toolbar from './components/toolbar/Toolbar'

function App() {
  const [currentTool, setCurrentTool] = useState('pencil')
  const [hideGrid, setHideGrid] = useState(false)
  console.log(currentTool)

  return (
    <div>
      <Canvas
        currentTool={currentTool}
        hideGrid={hideGrid}
      />
      <Palette />
      <Toolbar        
        setCurrentTool={setCurrentTool}
        hideGrid={hideGrid}
        setHideGrid={setHideGrid}
      />
    </div>
  )
}

export default App
