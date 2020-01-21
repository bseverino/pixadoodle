import React from 'react'

import ColorPicker from './ColorPicker'
import Swatch from './Swatch'

const Palette = props => {
    return (
        <div>
            <ColorPicker />
            <Swatch />
        </div>
    )
}

export default Palette