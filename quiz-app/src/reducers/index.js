import { combineReducers } from 'redux'

import author from './author'
import description from './description'
import questionList from './questionList'
import title from './title'

const reducer = combineReducers({
  author,
  description,
  questionList,
  title,
})

export default reducer