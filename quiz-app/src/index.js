import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router} from 'react-router-dom';

import App from './components/app'
import reducer from './reducers'
import './index.css';

const store = createStore(reducer)

render(
    <Provider store={store} >
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById('root')
);