export const START_DRAWING = 'START_DRAWING'
export const STOP_DRAWING = 'STOP_DRAWING'

export const startDrawing = () => {
    return { type: START_DRAWING }
}

export const stopDrawing = () => {
    return { type: STOP_DRAWING }
}