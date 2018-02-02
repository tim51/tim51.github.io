import React from 'react';
import EditableList from './EditableList';

class CreateQuizForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null,
            author: null,
            description: null,
            questions: [],
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

        if (event.target.className === "addItemButton") {
            this.setState({questions: state.questions.concat({question: null, answers: []})})
        }
        if (event.target.className === "removeItemButton") {    //doesnt work
            this.setState({questions: state.questions.splice(0,1)})
        }
    }


    renderQuestions() {
        return (
            this.state.questions.map((question,index)=>(<Question question={question} id={index} onChange={this.handleChange}/>))
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
              <EditableList onClick={this.handleClick} components={this.renderQuestions()} />
              <button id="submit-button" type="submit">Submit</button>
            </form>
        )
    }
}

class Question extends React.Component {

    render() {
        return (
            <div className="question-wrapper" id={this.props.id}>
              <input className="question-input" id={this.props.id} name="question" type="text" onChange={this.props.onChange}></input>
            </div>
        )
    }
}

export default CreateQuizForm;