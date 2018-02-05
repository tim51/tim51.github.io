let nextQuestionId = 0;

const ADD_QUESTION = 'ADD_QUESTION'
const DELETE_QUESTION = 'DELETE_QUESTION'
const SET_AUTHOR = 'SET_AUTHOR'
const SET_DESCRIPTION = 'SET_DESCRIPTION'
const SET_QUESTION = 'SET_QUESTION'
const SET_TITLE = 'SET_TITLE'

export const addQuestion = (question) => {
    return (
        {
            type: ADD_QUESTION,
            id: nextQuestionId++,
            question: question,
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

export const setAuthor = (author) => {
    return (
        {
            type: SET_AUTHOR,
            author: author,
        }
    )
}

export const setDescription = (description) => {
    return (
        {
            type: SET_DESCRIPTION,
            description: description,
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





