import React from 'react';
import './App.css';
import Header from '../header/Header.js'
import CreateQuizForm from '../create-quiz-form/CreateQuizForm.js'

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <Header />
        <CreateQuizForm />
      </div>
    );
  }
}

export default App;