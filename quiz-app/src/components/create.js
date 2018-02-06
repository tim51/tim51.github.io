import React from 'react'

import QuizForm from '../containers/quiz-form'

export default class Create extends React.Component {


    render() {
        return (
            <div className="create-wrapper">
              <h1 className="page-header">Create</h1>
              <QuizForm />
            </div>
        )
    }
}
