let nextQuestionId = 0;

export const addQuestion = (question) => {
    return (
        {
            type: 'ADD_QUESTION',
            id: nextQuestionId++,
            question: question,
        }
    )
}

export const deleteQuestion = (id) => {
    return (
        {
            type: 'DELETE_QUESTION',
            id: id,
        }
    )
}

export const setAuthor = (author) => {
    return (
        {
            type: 'SET_AUTHOR',
            author: author,
        }
    )
}

export const setDescription = (description) => {
    return (
        {
            type: 'SET_DESCRIPTION',
            description: description,
        }
    )
}

export const setTitle = (title) => {
    return (
        {
            type: 'SET_TITLE',
            title: title,
        }
    )
}

export const setQuestion = (id, question) => {
    return (
        {
            type: 'SET_QUESTION',
            id: id,
            question: question,
        }
    )
}



