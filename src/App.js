import React, { useState } from 'react'
import { connect } from 'react-redux'

import { startDrawing, stopDrawing } from './store/actions'

import Canvas from './components/canvas/Canvas'
import Palette from './components/palette/Palette'
import Toolbar from './components/toolbar/Toolbar'

function App(props) {
  const [currentTool, setCurrentTool] = useState('pencil')
  const [hideGrid, setHideGrid] = useState(false)
  console.log(currentTool)

  return (
    <div className='App' onMouseDown={props.startDrawing} onMouseUp={props.stopDrawing}>
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

const mapStateToProps = state => {
  return {
      isDrawing: state.isDrawing
  }
}

export default connect(mapStateToProps, { startDrawing, stopDrawing })(App)
