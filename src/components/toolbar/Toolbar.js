import React from 'react'

import ToggleGrid from './ToggleGrid'
import Pencil from './Pencil'
import Eraser from './Eraser'
import Eyedropper from './Eyedropper'

const Toolbar = props => {
    return (
        <div>
            <ToggleGrid />
            <Pencil />
            <Eraser />
            <Eyedropper />
        </div>
    )
}

export default Toolbar