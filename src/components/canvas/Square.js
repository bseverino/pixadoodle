import React, { useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

const StyledSquare = styled.div`
    width: 15px;
    height: 15px;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
`

const Square = props => {
    const [bgColor, setBgColor] = useState('#fff')

    const handleClick = () => {
        if (props.isDrawing) {
            if (props.currentTool === 'pencil') {
                setBgColor('#000')
            } else if (props.currentTool === 'eraser') {
                setBgColor('#fff')
            }
        }
    }

    return (
        <div>
            <StyledSquare
                style={{ backgroundColor: bgColor, border: props.hideGrid && 'none' }}
                onMouseOver={handleClick}
            />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isDrawing: state.isDrawing
    }
}

export default connect(mapStateToProps, {})(Square)