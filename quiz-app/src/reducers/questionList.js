const questionList = (state = [], action) => {
    switch (action.type) {
        case "ADD_QUESTION":
            return [...state, action.question];
        default:
            return state;
    }
}

export default questionList