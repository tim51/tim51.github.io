import React from 'react';
import EditableList from './EditableList';

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

        if (event.target.id === "title-input") {
            this.setState({title: event.target.value})
        }
        if (event.target.id === "author-input") {
            this.setState({author: event.target.value})
        }
        if (event.target.id === "description-textarea") {
            this.setState({description: event.target.value})
        }
        if (event.target.className === "question-input") {
            state.questions[0].question = event.target.value;  //need to change correct index
            this.setState({questions: state.questions})
        }
        else {
            console.log("woops didnt handle change");
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
            <EditableList addItemButtonClassName="add-question-button"
                          addItemButtonText="add question"
                          deleteItemButtonClassName="delete-question-button"
                          deleteItemButtonText="delete question"
                          list={this.state.questions.map(question=><QuestionListItem onClick={this.handleClick} question={question}/>)}
                          listClassName="question-list"
                          onClick={this.handleClick}
                          />
        )
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
              <div id="title-wrapper">
                <label id="title-label">Title: </label>
                <input id="title-input" name="title" type="text" onChange={this.handleChange} ></input>
              </div>  
              <div id="author-wrapper">
                <label id="author-wrapper">Author: </label>
                <input id="author-input" name="author" type="text" onChange={this.handleChange} ></input>
              </div> 
              <div id="description-wrapper">
                <label id="description-label">Description: </label>
                <textarea id="description-textarea" name="description" onChange={this.handleChange} ></textarea>
              </div>
              {this.renderQuestionList()}
              <button id="submit-button" type="submit">Submit</button>
            </form>
        )
    }
}

class QuestionListItem extends React.Component {

    renderCorrectAnswerList() {
        return (
            <EditableList addItemButtonClassName="add-correct-answer-button"
                          addItemButtonText="add correct answer"
                          deleteItemButtonClassName="delete-answer-button"
                          deleteItemButtonText="delete answer"
                          list={this.props.question.correctAnswers.map(answer => <div>{answer}</div>)}
                          listClassName="answer-list"
                          onClick={this.props.onClick}
                          />
        )
    }

    renderIncorrectAnswerList() {
        return (
            <EditableList addItemButtonClassName="add-incorrect-answer-button"
                          addItemButtonText="add incorrect answer"
                          deleteItemButtonClassName="delete-answer-button"
                          deleteItemButtonText="delete answer"
                          list={this.props.question.incorrectAnswers.map(answer => <div>{answer}</div>)}
                          listClassName="answer-list"
                          onClick={this.props.onClick}
                          />
        )
    }

    render() {
        return (
            <div className="question-wrapper">
              <label>Question: </label><input className="question-input" type="text" onChange={this.props.onChange} defaultValue={this.props.question.question}></input>
              <label>Correct: </label>{this.renderCorrectAnswerList()}
              <label>Incorrect: </label>{this.renderIncorrectAnswerList()}
            </div>
        )
    }
}

class AnswerItem extends React.Component {

    render() {
        return (
            <div><input type="text" initialValue={this.props.answer}></input><button></button></div>
        )
    }
}

export default CreateQuizForm;