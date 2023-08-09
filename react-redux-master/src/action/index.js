export const increment = (val) => {
    return {
        type : 'INCREMENT',
        inc : val
    }
}
export const decrement = (val) => {
    return {
        type : 'DECREMENT',
        dec : val
    }
}
