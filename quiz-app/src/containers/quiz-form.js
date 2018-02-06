import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import { addQuestion, setAuthor, setTitle } from '../actions/index'
import QuestionList from './question-list'

QuizForm.propTypes = {
    onAddQuestion: PropTypes.func.isRequired,
    onAuthorChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func, //////////////////////////here
    onTitleChange: PropTypes.func.isRequired,
}

function QuizForm({onAddQuestion, onAuthorChange, onSubmit, onTitleChange}) { 
    return (
        <form className="create-quiz-form" onSubmit={onSubmit}>
          <div className="title-wrapper">
            <label className="title-label">Title: </label>
            <input className="title-input" type="text" onChange={onTitleChange} ></input>
          </div>  
          <div className="author-wrapper">
            <label className="author-wrapper">Author: </label>
            <input className="author-input" type="text" onChange={onAuthorChange} ></input>
          </div> 
          <div className="question-list-wrapper">
            <QuestionList />
            <button className="add-question-button" onClick={onAddQuestion} type="button">add question</button>
          </div>
          <button className="submit-button" type="submit">Submit</button>
        </form>
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddQuestion: () => (dispatch(addQuestion())),
    onAuthorChange: (event) => (dispatch(setAuthor(event.target.value))),
    onTitleChange: (event) => (dispatch(setTitle(event.target.value))),
  }
}

QuizForm = connect(null, mapDispatchToProps)(QuizForm)

export default QuizForm
