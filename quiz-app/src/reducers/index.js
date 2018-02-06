import { combineReducers } from 'redux'

import author from './author'
import questionIdList from './questionIdList'
import questionList from './questionList'
import title from './title'

const reducer = combineReducers({
  author,
  questionList,
  title,
})

export default reducer