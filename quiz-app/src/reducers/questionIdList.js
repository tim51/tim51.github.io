const questionIdList = (state = {idList: [], active: null}, action) => {
    switch (action.type) {
        case "ADD_QUESTION":
            return {idList: [...state.idList, action.id], active: state.active}
        case "SET_ACTIVE_QUESTION_ID":
            return {idList: state.idList, active: action.id}
        case "SET_LAST_QUESTION_ID_AS_ACTIVE":
            return {idList: state.idList, active: state.idList.length - 1 }
        default:
            return state
    }
}

export default questionIdList