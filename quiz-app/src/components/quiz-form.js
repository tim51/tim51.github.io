import React from 'react'
import PropTypes from 'prop-types'

QuizForm.propTypes = {
    onAddQuestion: PropTypes.func.isRequired,
    onAuthorChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onTitleChange: PropTypes.func.isRequired,
}

const QuizForm = ({onAddQuestion, onAuthorChange, onSubmit, onTitleChange}) => {
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
      
        <button className="add-question-button" onClick={onAddQuestion} type="button">add question</button>
      </div>
      <button className="submit-button" type="submit">Submit</button>
    </form>
}

export default QuizForm
