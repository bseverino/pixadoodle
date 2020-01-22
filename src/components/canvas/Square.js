import React, { useState } from 'react'
import styled from 'styled-components'

const StyledSquare = styled.div`
    width: 15px;
    height: 15px;
    margin: 0;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
`

const Square = props => {
    const [bgColor, setBgColor] = useState('#fff')

    const handleClick = () => {
        if (props.currentTool === 'pencil') {
            setBgColor('#000')
        } else if (props.currentTool === 'eraser') {
            setBgColor('#fff')
        }
    }

    return (
        <div>
            <StyledSquare
                style={{ backgroundColor: bgColor, border: props.hideGrid && 'none' }}
                onClick={handleClick}
            />
        </div>
    )
}

export default Square