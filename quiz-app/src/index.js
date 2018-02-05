import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router} from 'react-router-dom';

import App from './components/app'
import reducer from './reducers'
import './index.css';

const store = createStore(reducer)
console.log(store.getState())
store.subscribe(() => console.log(store.getState()))

render(
    <Provider store={store} >
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById('root')
);