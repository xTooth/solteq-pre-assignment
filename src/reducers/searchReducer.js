const searchReducer = (term = '', action) => {
    if (action.type === 'NEW_TERM') {
        term = action.data
    }
    return term
}

export default searchReducer

