import React from 'react'
import {connect} from 'react-redux'

class QuestionList extends React.Component {

    render() {
        const {questionList, ...otherProps} = this.props
        return (
            <ol className="question-list">
              {this.props.questionList.map(question => <li>a</li>)}
            </ol>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        questionIdList: state.questionIdList,
    }
}

QuestionList = connect(mapStateToProps,null)(QuestionList)

export default QuestionList