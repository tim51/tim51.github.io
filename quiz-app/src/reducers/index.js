import { combineReducers } from 'redux'

import author from './author'
import questionIdList from './questionIdList'
import questionList from './questionList'
import title from './title'

const reducer = combineReducers({
  author,
  questionIdList,
  questionList,
  title,
})

export default reducer