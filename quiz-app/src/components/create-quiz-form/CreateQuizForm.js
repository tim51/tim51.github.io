import React from 'react';
import EditableList from './EditableList';
import './CreateQuizForm.css';

class CreateQuizForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null,
            author: null,
            description: null,
            questions: [
                {
                    question: "1+1?",
                    correctAnswers: ["2"],
                    incorrectAnswers: ["1","3"], 
                }],
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
    }

    handleChange(event) {
        let state = {...this.state};

        if (event.target.className === "title-input") {
            this.setState({title: event.target.value})
        }
        else if (event.target.className === "author-input") {
            this.setState({author: event.target.value})
        }
        else if (event.target.className === "description-textarea") {
            this.setState({description: event.target.value})
        }
        else if (event.target.className === "question-input") {
            state.questions[event.target.getAttribute("question-id")].question = event.target.value;
            this.setState({questions: state.questions})
        }
        else {
            console.log("woops didnt handle change"+event.target);
        }
    }

    handleClick(event) {
        let state = {...this.state};

        if (event.target.className === "add-question-button") {
            this.setState({questions: state.questions.concat({
                question: null,
                correctAnswers: [], 
                incorrectAnswers: [],
            })})
        }
    }

    renderQuestionList() {
        return (
            <EditableList deleteItemButtonClassName="delete-question-button"
                          deleteItemButtonText="delete question"
                          list={this.state.questions.map((question,index)=><QuestionListItem onChange={this.handleChange} onClick={this.handleClick} question={question} questionId={index}/>)}
                          listClassName="question-list"
                          onClick={this.handleClick}
                          />
        )
    }

    render() {
        return (
            <form className="create-quiz-form" onSubmit={this.handleSubmit}>
              <div className="title-wrapper">
                <label className="title-label">Title: </label>
                <input className="title-input" type="text" onChange={this.handleChange} ></input>
              </div>  
              <div className="author-wrapper">
                <label className="author-wrapper">Author: </label>
                <input className="author-input" type="text" onChange={this.handleChange} ></input>
              </div> 
              <div className="description-wrapper">
                <label className="description-label">Description: </label>
                <textarea className="description-textarea" onChange={this.handleChange} ></textarea>
              </div>
              <div className="question-list-wrapper">
                {this.renderQuestionList()}
                <button className="add-question-button" onClick={this.handleClick}>add question</button>
              </div>
              <button className="submit-button" type="submit">Submit</button>
            </form>
        )
    }
}

class QuestionListItem extends React.Component {

    renderCorrectAnswerList() {
        return (
            <EditableList deleteItemButtonClassName="delete-answer-button"
                          deleteItemButtonText="delete answer"
                          list={this.props.question.correctAnswers.map(answer => <AnswerListItem answer={answer}/>)}
                          listClassName="answer-list"
                          onClick={this.props.onClick}
                          />
        )
    }

    renderIncorrectAnswerList() {
        return (
            <EditableList deleteItemButtonClassName="delete-answer-button"
                          deleteItemButtonText="delete answer"
                          list={this.props.question.incorrectAnswers.map(answer => <AnswerListItem answer={answer}/>)}
                          listClassName="answer-list"
                          onClick={this.props.onClick}
                          />
        )
    }

    render() {
        return (
            <div className="question-item-wrapper">
              <div className="question-wrapper">
                <label className="question-label" >Question: </label>
                <input className="question-input" type="text" onChange={this.props.onChange} defaultValue={this.props.question.question} question-id={this.props.questionId}></input>
              </div>
              <div className="correct-answer-wrapper">
                <label className="correct-answer-label">Correct: </label>
                {this.renderCorrectAnswerList()}
                <button className="add-answer-button" onClick={this.props.onClick}>add answer</button>
              </div>
              <div className="incorrect-answer-wrapper">
                <label>Incorrect: </label>
                {this.renderIncorrectAnswerList()}
                <button className="add-answer-button" onClick={this.props.onClick}>add answer</button>
              </div>
            </div>
        )
    }
}

class AnswerListItem extends React.Component {

    render() {
        return (
            <input className="answer-input" type="text" defaultValue={this.props.answer}></input>
        )
    }
}

export default CreateQuizForm;