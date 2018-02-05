const author = (state = "", action) => {
    switch (action.type) {
        case 'SET_AUTHOR':
            return (action.author)
        default:
            return (state)
    }
}

export default author