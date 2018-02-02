import React from 'react';

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
              <QuestionList questions={this.state.questions} onClick={this.handleClick}/>
              <button id="submit-button" type="submit">Submit</button>
            </form>
        )
    }
}

class QuestionList extends React.Component {

    render() {
        
        let questionList = this.props.questions.map((question,index) => (<li key={index}> <QuestionListItem id={index} question={question}/> </li>))

        return (
            <div>
              <ul>
                {questionList}
              </ul>
              <button className="add-question-button" onClick={this.props.onClick}>Add Question</button>
            </div>
        )
    }
}

class QuestionListItem extends React.Component {

    render() {
        return (
            <div className="question-wrapper" id={this.props.id}>
              <label>Question: </label><input className="question-input" id={this.props.id} type="text" onChange={this.props.onChange} defaultValue={this.props.question.question}></input>
              <AnswerList label="Correct answers: " answers={this.props.question.correctAnswers}/>
              <AnswerList label="Incorrect answers: " answers={this.props.question.incorrectAnswers}/>
            </div>
        )
    }
}

class AnswerList extends React.Component {
    
    render() {
        
        let answerList = this.props.answers.map((answer,index) => (<li key={index}> <input type="text" defaultValue={answer}></input> </li>))
        
        return (
            <div>
              <label>{this.props.label}</label>
              <ul>
                {answerList}
                <button className="add-answer-button" onClick={this.props.onClick}>Add Answer</button>
              </ul>
              
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

class EditableList extends React.Component {

    render() {

        let list = this.props.components.map((component,index) => (<li key={index}> {component} <button>x</button></li>))

        return (
            <div className={this.props.className}>
              <label>{this.props.label}</label>
              <ul>
                {list}
              </ul>
              <button className={this.props.addButtonClassName} onClick={this.props.onClick}>{this.props.addButtonText}</button>
            </div>
        )
    }
}

export default CreateQuizForm;