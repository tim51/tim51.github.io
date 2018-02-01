import React from 'react';

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
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    handleChange(event) {
    }

    render() {
        return (
            <form onSubmit={this.handleSumbit}>

            </form>
        )
    }
}

export default CreateQuizForm;