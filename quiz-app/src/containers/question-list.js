import React from 'react'
import {connect} from 'react-redux'

import OrderedList from '../components/ordered-list'
import {setActiveQuestionId} from '../actions'

const mapStateToProps = (state) => {
    return {
        list: state.questionIdList.idList.sort((a,b)=>{return a-b}),
        activeItem: state.questionIdList.active, 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (event) => (dispatch(setActiveQuestionId(event.target.id)))
    }
}

const QuestionList = connect(mapStateToProps,mapDispatchToProps)(OrderedList)

export default QuestionList