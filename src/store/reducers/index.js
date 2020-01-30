import {
    START_DRAWING,
    STOP_DRAWING
} from '../actions'

const initialState = {
    isDrawing: false,
    currentTool: 'pencil',
    gridVisible: true
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case START_DRAWING:
            return {
                ...state,
                isDrawing: true
            }
        case STOP_DRAWING:
            return {
                ...state,
                isDrawing: false
            }
        default:
            return state
    }
}

export default reducer