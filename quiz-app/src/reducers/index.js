import { combineReducers } from 'redux'

import author from './author'
import description from './description'

const reducer = combineReducers({
  author,
  description,
})

export default reducer