import React, { useState } from 'react'
import styled from 'styled-components'

import Square from './Square'

const Wrapper = styled.div`
    width: 481px;
    overflow: hidden;
`

const SquareContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 490px;
    border-top: 1px solid black;
    border-left: 1px solid black;    
`

const Canvas = props => {
    const [grid, setGrid] = useState([...Array(1024).keys()])

    return (
        <Wrapper>
            <SquareContainer
                style={{border: props.hideGrid && 'none'}}
            >
                {grid.map(number => (
                    <Square
                        {...props}
                        key={number}
                    />
                ))}
            </SquareContainer>
        </Wrapper>
    )
}

export default Canvas