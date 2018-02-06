const questionIdList = (state = [], action) => {
    switch (action.type) {
        case "ADD_QUESTION":
            return [...state, action.id]
        default:
            return state
    }
}

export default questionIdList