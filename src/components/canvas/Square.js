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
    const [color, setColor] = useState('#fff')

    return (
        <div>
            <StyledSquare
                style={{ backgroundColor: color }}
            />
        </div>
    )
}

export default Square