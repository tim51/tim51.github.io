import React from 'react'
import {connect} from 'react-redux'

import { 
    setAuthor,
    setDescription,
    setTitle,  
    } from '../actions';

class QuizForm extends React.Component {

    handleAuthorChange = (event) => {
        this.props.setAuthor(event.target.value);
    }

    handleDescriptionChange = (event) => {
        this.props.setDescription(event.target.value);
    }

    handleTitleChange = (event) => {
        this.props.setTitle(event.target.value);
    }

    render() {
        return (
          <form className="create-quiz-form" onSubmit={this.handleSubmit}>
            <div className="title-wrapper">
              <label className="title-label">Title: </label>
              <input className="title-input" type="text" onChange={this.handleTitleChange} ></input>
            </div>  
            <div className="author-wrapper">
              <label className="author-wrapper">Author: </label>
              <input className="author-input" type="text" onChange={this.handleAuthorChange} ></input>
            </div> 
            <div className="description-wrapper">
              <label className="description-label">Description: </label>
              <textarea className="description-textarea" onChange={this.handleDescriptionChange} ></textarea>
            </div>
            <div className="question-list-wrapper">
              
              <button className="add-question-button" onClick={this.handleClick}>add question</button>
            </div>
            <button className="submit-button" type="submit">Submit</button>
          </form>
        )
    }
}

const mapStateToProps = (state) => ({
    author: state.author,
    description: state.description,
    title: state.title,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    setAuthor: (author) => {dispatch(setAuthor(author))},
    setDescription: (description) => {dispatch(setDescription(description))},
    setTitle: (title) => {dispatch(setTitle(title))},
})

QuizForm = connect(mapStateToProps,mapDispatchToProps)(QuizForm)

export default QuizForm
