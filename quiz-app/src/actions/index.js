let nextQuestionId = 0;

const ADD_QUESTION = 'ADD_QUESTION'
const DELETE_QUESTION = 'DELETE_QUESTION'
const SET_ACTIVE_QUESTION_ID = 'SET_ACTIVE_QUESTION_ID'
const SET_AUTHOR = 'SET_AUTHOR'
const SET_LAST_QUESTION_ID_AS_ACTIVE = 'SET_LAST_QUESTION_ID_AS_ACTIVE'
const SET_QUESTION = 'SET_QUESTION'
const SET_TITLE = 'SET_TITLE'

export const addQuestion = () => {
    return (
        {
            type: ADD_QUESTION,
            id: nextQuestionId++,
        }
    )
}

export const deleteQuestion = (id) => {
    return (
        {
            type: DELETE_QUESTION,
            id: id,
        }
    )
}

export const setActiveQuestionId = (id) => {
    return (
        {
            type: SET_ACTIVE_QUESTION_ID,
            id: id,
        }
    )
}

export const setAuthor = (author) => {
    return (
        {
            type: SET_AUTHOR,
            author: author,
        }
    )
}

export const setLastQuestionIdAsActive = () => {
    return (
        {
            type: SET_LAST_QUESTION_ID_AS_ACTIVE,
        }
    )
}

export const setQuestion = (id, question) => {
    return (
        {
            type: SET_QUESTION,
            id: id,
            question: question,
        }
    )
}

export const setTitle = (title) => {
    return (
        {
            type: SET_TITLE,
            title: title,
        }
    )
}





