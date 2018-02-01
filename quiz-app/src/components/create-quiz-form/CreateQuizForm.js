import React from 'react';

class CreateQuizForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quizTitle: null,
            author: null,
            description: null,
            questions: [],
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.addQuestionField();
        this.addQuestionField();
    }

    handleSubmit(event) {
        event.preventDefault();
        alert('Quiz title: '+this.state.quizTitle +', Author: '+this.state.author);
    }

    handleChange(event) {
    }

    addQuestionField() {
        this.setState((prevState) => ({
            questions: prevState.questions.concat(<QuestionListItem question={'hello?'} answers={['a','b','c','d']} onChange={this.handleChange} />)}))
    }

    render() {
        return (
            <form onSubmit={this.handleSumbit}>
                <InputField label='Quiz Title' maxCharacters='12'/>
                <InputField label='Author' maxCharacters='12'/>
                <ol>
                    {this.state.questions}
                </ol>
                <button onClick={this.handleSubmit}>Submit</button>
                <EditableList componentList={[<InputField label='Author' maxCharacters='12'/>]} componentTemplate={<InputField label='Author' maxCharacters='12'/>}/>
            </form>
        )
        /*
            Quiz title      Author

           1 Question---------------
           1 -answer               -
           1 -answer               -
            -----------------------
           2 Question---------------
           2 -answer               -
           2 -answer               -
            -----------------------
           3 Question---------------
           3 -answer               -
           3 -answer               -
            -----------------------
        
        
        */
    }
}

class InputField extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: props.value,
        }
        this.label = props.label;
        this.maxCharacters = props.maxCharacters;
        this.placeHolder = props.placeHolder;

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        if (event.target.value.length > this.maxCharacters) {
            return;
        }
        this.setState({
            value: event.target.value
        });
    }

    render() {
        return (
            <div>
                <label>{this.label}:</label>
                <input type="text" value={this.state.value} placeHolder={this.placeHolder} onChange={this.handleChange}></input>
            </div>
        )
    }
}

function QuestionListItem(props) {
    let answerList = props.answers.map((answer) =><li key={answer}><input type='text' value={answer} onChange={props.onChange}></input></li>);
    return (
        <li> 
            Question: {props.question}
            <ol>
                {answerList}
            </ol>
        </li>
    )
}

class EditableList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            componentList: props.componentList?props.componentList:[],
        }
        this.componentTemplate = props.componentTemplate;

        this.handleClick = this.handleClick.bind(this);
    }
    

    handleClick(event) {
        if(event.target.className === 'addItemButton') {
            this.setState(prevState => ({
                componentList: prevState.componentList.concat(this.componentTemplate),
            }));
        }
        if(event.target.className === 'deleteItemButton') {
            let componentIndex = this.state.componentList.indexOf(event.parentNode);
            alert(event.target)
            this.setState(prevState => ({
                componentList: prevState.componentList.splice(componentIndex,1)}))
        }
    }
    render() {
        let componentList = this.state.componentList;

        return (
            <div>
                <ul>
                    {componentList.map((component,index) => <li key={index}>{component}<button className='deleteItemButton' onClick={this.handleClick}>x</button></li>)}
                </ul>
                <button className='addItemButton' onClick={this.handleClick}>+</button>
            </div>
        )
    }
}


export default CreateQuizForm