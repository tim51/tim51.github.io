const questionList = (state = [], action) => {
    switch (action.type) {
        case "ADD_QUESTION":
            return [...state, {questionId: null, question: null}]
        default:
            return state
    }
}

export default questionList