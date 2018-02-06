import React from 'react'
import {connect} from 'react-redux'

import OrderedList from '../components/ordered-list'

const mapStateToProps = (state) => {
    return {
        list: state.questionIdList.sort(),
    }
}

const QuestionList = connect(mapStateToProps,null)(OrderedList)

export default QuestionList