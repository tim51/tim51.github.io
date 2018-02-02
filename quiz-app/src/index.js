import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CreateQuizForm from './components/create-quiz-form/CreateQuizForm.js'
import App from './components/app/App.js';
import registerServiceWorker from './registerServiceWorker';

import EditableList from './components/create-quiz-form/EditableList'

class Test extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            components:[],
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        if (event.target.className === 'deleteItemButton') {
            this.setState({
                components: [],
            })
            console.log(event.target)
            console.log(event.target.parentElement.id)
            console.log(event.currentTarget)
        }
        if (event.target.className === 'addItemButton') {
            this.setState(prevState=>({components: prevState.components.concat(<EditableList onClick={this.handleClick}/>)}))
        }
    }

    componentDidMount() {
    }

    render() {
        var components = this.state.components

        return (
            <div>
                <EditableList components={components} onClick={this.handleClick} />
                {this.state.components.length}
            </div>
        )
    }
}


ReactDOM.render(<EditableList list={[<EditableList list={[<label>1a</label>,<label>2b</label>,1,'2',3]} 
onClick={(event)=>console.log(event.target.previousSibling)}
addItemButtonText="add" />,1,'2',3]} 
                              onClick={(event)=>console.log(event.target.previousSibling)}
                              addItemButtonText="add" />
                                                , document.getElementById('root'));
registerServiceWorker();