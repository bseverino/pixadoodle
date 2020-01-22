import React from 'react'

import ToggleGrid from './ToggleGrid'
import Pencil from './Pencil'
import Eraser from './Eraser'
import Eyedropper from './Eyedropper'

const Toolbar = props => {
    return (
        <div>
            <ToggleGrid toggleGrid={() => props.setHideGrid(!props.hideGrid)} />
            <Pencil setPencil={() => props.setCurrentTool('pencil')} />
            <Eraser setEraser={() => props.setCurrentTool('eraser')} />
            <Eyedropper />
        </div>
    )
}

export default Toolbar