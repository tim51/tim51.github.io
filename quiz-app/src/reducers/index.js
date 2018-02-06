import { combineReducers } from 'redux'

import author from './author'
import description from './description'
import title from './title'

const reducer = combineReducers({
  author,
  description,
  title,
})

export default reducer