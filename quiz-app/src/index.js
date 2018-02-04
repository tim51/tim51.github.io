import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CreateQuizForm from './components/create-quiz-form/CreateQuizForm.js'
import App from './components/app/App.js';
import registerServiceWorker from './registerServiceWorker';

import DeletableList from './components/create-quiz-form/DeletableList'

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
            this.setState(prevState=>({components: prevState.components.concat(<DeletableList onClick={this.handleClick}/>)}))
        }
    }

    componentDidMount() {
    }

    render() {
        var components = this.state.components

        return (
            <div>
                <DeletableList components={components} onClick={this.handleClick} />
                {this.state.components.length}
            </div>
        )
    }
}


ReactDOM.render(<CreateQuizForm />, document.getElementById('root'));
registerServiceWorker();